from os import path
import os
import subprocess
import configparser
import shutil
import urllib.request
import json

EMOJI_OK = "✅"
EMOJI_WARNING = "🟧"
EMOJI_ERROR = "❌"
EMOJI_LOADING = "🟦"

config = configparser.ConfigParser()


class SwaggerFileGenerate:
    def __init__(
        self, basedir,
        tmpdir,
        credentials_filepath,
        output_dir,
        swagger_filename,
        api_class_name,
        endpoint_env_var,
        auth_header_prefix="Token"
    ):
        self.basedir = basedir
        self.tmpdir = tmpdir

        self.credentials_filepath = credentials_filepath

        self.output_dirpath = output_dir
        self.swagger_filename = swagger_filename

        self.api_class_name = api_class_name
        self.endpoint_env_var = endpoint_env_var

        self.auth_header_prefix = auth_header_prefix

    def read_credentials_file(self):
        if not path.exists(self.credentials_filepath):
            print(
                f"{EMOJI_ERROR} Arquivo " +
                f"{self.credentials_filepath} não localizado!"
            )
            exit(1)

        print(f"{EMOJI_OK} Arquivo {self.credentials_filepath}")

        config.read(self.credentials_filepath)

    def check_node(self):
        if shutil.which('node') is None:
            print(f"{EMOJI_ERROR} Node não está instalado!")
            exit(1)

        print(f"{EMOJI_OK} Node instalado")

    def check_tmp_dir(self):
        if not path.exists(self.tmpdir):
            print(f"{EMOJI_WARNING} Diretório {self.tmpdir} não localizado!")
            print(f"{EMOJI_LOADING} Criando diretório {self.tmpdir}...")

            os.mkdir(self.tmpdir)

        print(f"{EMOJI_OK} Diretório {self.tmpdir}")

    def check_output_directory(self):
        if not path.exists(self.output_dirpath):
            print(f"{EMOJI_WARNING} Diretório " +
                  f"{self.output_dirpath} não localizado!")
            print(f"{EMOJI_LOADING} Criando diretório " +
                  f"{self.output_dirpath}...")

            os.makedirs(self.output_dirpath)

        print(f"{EMOJI_OK} Diretório {self.output_dirpath}")

    def download_swagger_api(self):
        print(f"{EMOJI_LOADING} " +
              "Baixando a descrição swagger da API backend...")
        swagger_api_url = config['API']['ENDPOINT']
        swagger_api_token = config['API']['TOKEN']

        try:
            request = urllib.request.Request(swagger_api_url)
            request.add_header(
                "Authorization",
                f"{self.auth_header_prefix} {swagger_api_token}"
            )

            with urllib.request.urlopen(request) as swagger_api_response:
                swagger_api_data = swagger_api_response.read().decode("utf-8")
        except ConnectionResetError:
            print(f"{EMOJI_ERROR} Erro ao conectar à url da API do swagger." +
                  " Verifique se o endpoint está acessível.")
            exit(1)
        except urllib.error.HTTPError as err:
            print(f"{EMOJI_ERROR} Erro ao acessar à API do swagger: {err}")
            exit(1)

        with open(
            path.join(self.tmpdir, self.swagger_filename),
                "w", encoding='utf8') as swagger_api_file:
            swagger_api_file.write(swagger_api_data)

        print(f"{EMOJI_OK} Descrição swagger da API backend")

    def generate_client_code(self):

        print(f"{EMOJI_LOADING} Gerando o código cliente...")
        print(f"{EMOJI_LOADING} Output path: ", self.output_dirpath)

        if path.exists(self.output_dirpath):
            shutil.rmtree(self.output_dirpath)
        else:
            print(f"{EMOJI_ERROR}" +
                  "Pasta para geração do cliente não encontrda!")

        args = [
            "npx",
            "swagger-typescript-api",
            "--name", self.api_class_name,
            "-p", f"{self.tmpdir}/{self.swagger_filename}",
            "-o", self.output_dirpath,
        ]
        process = subprocess.Popen(
            args,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        stdout, stderr = process.communicate()

        if process.returncode != 0:
            print(f"{EMOJI_ERROR} Erro ao gerar o código cliente!")
            print(f"Exit Code: {process.returncode}")
            print("Standard Output:")
            print(stdout.decode())
            print("Standard Error:")
            print(stderr.decode())
            exit(1)

        print(stdout.decode())

    def read_swagger_api_file_as_json(self):
        with open(
            path.join(self.tmpdir, self.swagger_filename),
                "r", encoding='utf8') as swagger_api_file:
            swagger_api_data = json.load(swagger_api_file)

        return swagger_api_data

    def base_url_of_swagger_api(self):
        swagger_api_data = self.read_swagger_api_file_as_json()
        scheme = swagger_api_data["schemes"][0]
        host = swagger_api_data["host"]
        basePath = swagger_api_data["basePath"]
        url = f"{scheme}://{host}{basePath}"

        return url

    def client_code_file_data(self):
        client_code_file_path = f'{self.output_dirpath}/Api.ts'

        with open(client_code_file_path, "r", encoding='utf8') as file:
            return file.read()

    def replace_endpoint_with_python(self):
        url = self.base_url_of_swagger_api()
        client_code_file_path = f'{self.output_dirpath}/Api.ts'

        client_code_data = self.client_code_file_data()
        new_client_code = client_code_data.replace(
            f'"{url}"',
            f"process.env.{self.endpoint_env_var}"
        )

        with open(client_code_file_path, "w", encoding='utf8') as file:
            file.write(new_client_code)

    def delete_base_url_comment_with_python(self):
        client_code_file_path = f'{self.output_dirpath}/Api.ts'

        url = self.base_url_of_swagger_api()

        with open(client_code_file_path, "r", encoding='utf8') as file:
            lines = file.readlines()
            lines = [line for line in lines if f'@baseUrl {url}' not in line]

        with open(client_code_file_path, "w", encoding='utf8') as file:
            file.write("".join(lines))

    def replace_endpoint(self):
        print(f"{EMOJI_LOADING}" +
              " Substituindo o endpoint por variável de ambiente...")

        url = self.base_url_of_swagger_api()

        if shutil.which('sed') is None:
            print(f"{EMOJI_WARNING} sed não está instalado")

            self.replace_endpoint_with_python()
        else:
            print(f"{EMOJI_OK} sed está instalado.")

        cmd = [
            'sed',
            '-i',
            f's|"{url}"|process.env.{self.endpoint_env_var}|',
            f'{self.output_dirpath}/{self.api_class_name}.ts'
        ]

        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        stdout, stderr = process.communicate()

        if len(stderr) > 0:
            print(f"{EMOJI_ERROR} Erro ao efetuar substituições!")
            print(stderr)
            exit(1)

        print(stdout.decode())

    print(f"{EMOJI_OK} Substituições realizadas com sucesso.")

    def delete_base_url_comment(self):
        print(f"{EMOJI_LOADING} Deletando docstring da baseUrl...")

        url = self.base_url_of_swagger_api()

        if shutil.which('sed') is None:
            print(f"{EMOJI_WARNING} sed não está instalado")

            self.delete_base_url_comment_with_python()
        else:
            print(f"{EMOJI_OK} sed está instalado.")

        cmd = [
            'sed', '-i',
            f'\\|@baseUrl {url}|d',
            f'{self.output_dirpath}/{self.api_class_name}.ts'
        ]

        process = subprocess.Popen(
            cmd,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )

        stdout, stderr = process.communicate()

        if len(stderr) > 0:

            print(f"{EMOJI_ERROR} Erro ao efetuar deleção!")
            print(stderr)
            exit(1)

        print(stdout.decode())

    print(f"{EMOJI_OK} Deleções realizadas com sucesso.")

    def change_client_code(self):
        self.replace_endpoint()
        self.delete_base_url_comment()

    def run(self):
        self.read_credentials_file()
        self.check_node()
        self.check_tmp_dir()
        self.check_output_directory()
        self.download_swagger_api()
        self.generate_client_code()
        self.change_client_code()
