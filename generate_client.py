#!/usr/bin/env python3

# Página onde o executável está hospedado:
# https://mvnrepository.com/artifact/io.swagger.codegen.v3/swagger-codegen-cli

import shutil
import os
from os import path
import urllib.request
import re
import configparser

BASE_DIR = os.path.realpath(os.path.dirname(__file__))
CREDENTIALS_PATH = path.join(BASE_DIR, ".api_key.config")

config = configparser.ConfigParser()
config.read(CREDENTIALS_PATH)

SWAGGER_CODEGEN_CLI_VERSION = config['CODEGEN_CLI']['VERSION']

TMP_PATH = path.join(BASE_DIR, ".tmp")

SWAGGER_CODEGEN_CLI_PATH = path.join(TMP_PATH, "swagger-codegen-cli.jar")
SOLAR_OPENAPI_PATH = path.join(TMP_PATH, "solar_openapi.json")
FETCH_CLIENT_PATH = path.join(TMP_PATH, "fetch-client")

GENERATED_CODE_OUTPUT_PATH = path.join(BASE_DIR, "src", "lib", "fetch-client")

os.environ.setdefault("REPLACE_SECURITY_DEFINITIONS", "false")
os.environ.setdefault("DOWNLOAD_CLIENT_CODE", "true")

REPLACE_SECURITY_DEFINITIONS = os.environ.get("REPLACE_SECURITY_DEFINITIONS").lower() == "true"
DOWNLOAD_CLIENT_CODE = os.environ.get("DOWNLOAD_CLIENT_CODE").lower() == "true"

def check_java():
  if shutil.which("java") is None:
    print("❌ Java não está instalado")
    exit(1)

  print("✅ Java instalado")

def check_tmp_dir():
  if not path.exists(TMP_PATH):
    print(f"❗ Criando diretório {TMP_PATH}")
    os.mkdir(TMP_PATH)

  print(f"✅ Diretório {TMP_PATH}")

def check_credentials_file():
  if not path.exists(CREDENTIALS_PATH):
    print(f"❌ Arquivo {CREDENTIALS_PATH} não localizado")
    exit(1)

  print(f"✅ Arquivo {CREDENTIALS_PATH}")

def read_credentials():
  endpoint  = config['API']['ENDPOINT_SOLAR']
  token     = config['API']['TOKEN_SOLAR']

  return [endpoint, token]

def check_swagger_gen_cli():
  if not path.exists(SWAGGER_CODEGEN_CLI_PATH):
    print(f"❗ Arquivo {SWAGGER_CODEGEN_CLI_PATH} não localizado")

    swagger_codegen_cli_url = f"https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/{SWAGGER_CODEGEN_CLI_VERSION}/swagger-codegen-cli-{SWAGGER_CODEGEN_CLI_VERSION}.jar"

    try:
      print(f"📥 Baixando o arquivo {swagger_codegen_cli_url} ...")

      with urllib.request.urlopen(swagger_codegen_cli_url) as response:
        with open(SWAGGER_CODEGEN_CLI_PATH, "wb") as file:
          file.write(response.read())
    except Exception as ex:
      print("❌ Erro ao baixar o arquivo swagger-codegen-cli.jar:", ex)
      exit(1)

  print("✅ swagger-codegen-cli.jar baixado")

def download_solar_openapi(api_url, api_key):
  try:
    solar_openapi_url = f"{api_url}/swagger/?format=openapi"

    request = urllib.request.Request(solar_openapi_url)
    request.add_header("Authorization", f"Token {api_key}")

    with urllib.request.urlopen(request) as response:
      data = response.read().decode("utf-8")

      if REPLACE_SECURITY_DEFINITIONS:
        data = replace_security_definitions(data)

    with open(SOLAR_OPENAPI_PATH, "w", encoding='utf8') as file:
      file.write(data)

    print("✅ Endpoints do Solar gerados pelo Swagger baixado")
  except Exception as ex:
    print("❌ Erro ao baixar os endpoints do Solar gerados pelo Swagger:", ex)
    exit(1)

def replace_security_definitions(data):
  return re.sub(r'"securityDefinitions": {"Basic": {"type": "basic"}}, "security": \[{"Basic": \[]}]', '"securityDefinitions": { "Basic": { "type": "basic" }, "TokenAuth": { "type": "apiKey", "in": "header", "name": "Authorization", "description": "Token-based authentication with required prefix \\"Token\\"" } }, "security": [{ "Basic": [] }, { "TokenAuth": [] }]', data)

def generate_client_code():
  print("📥 Gerando o código cliente ...")

  if path.exists(FETCH_CLIENT_PATH):
    shutil.rmtree(FETCH_CLIENT_PATH)

  try:
    cmd = f"java -jar {SWAGGER_CODEGEN_CLI_PATH} generate -i {SOLAR_OPENAPI_PATH} -l typescript-fetch --additional-properties modelPropertyNaming=original -o {FETCH_CLIENT_PATH}"
    os.system(cmd)
    print("✅ Código cliente gerado")

    if path.exists(SOLAR_OPENAPI_PATH):
      os.remove(SOLAR_OPENAPI_PATH)
      print("✅ Removido arquivo de endpoints baixado")
  except Exception as ex:
    print("❌ Erro ao gerar o código cliente:", ex)
    exit(1)

def download_client_code(api_url, api_key):
  print("📥 Baixando o código cliente ...")

  if path.exists(FETCH_CLIENT_PATH):
    shutil.rmtree(FETCH_CLIENT_PATH)

  try:
    cmd = f'java -jar {SWAGGER_CODEGEN_CLI_PATH} generate -i {api_url}/swagger/?format=openapi -a "Authorization: Token {api_key}" -l typescript-fetch --additional-properties modelPropertyNaming=original -o {FETCH_CLIENT_PATH}'
    os.system(cmd)
    print("✅ Código cliente baixado")
  except Exception as ex:
    print("❌ Erro ao baixar o código cliente:", ex)
    exit(1)

def remove_files():
  files = [
    path.join(FETCH_CLIENT_PATH, ".gitignore"),
    path.join(FETCH_CLIENT_PATH, ".swagger-codegen-ignore"),
    path.join(FETCH_CLIENT_PATH, "api_test.spec.ts"),
    path.join(FETCH_CLIENT_PATH, "git_push.sh"),
  ]

  for file in files:
    if path.exists(file):
      os.remove(file)

  print("✅ Arquivos não utilizados do código cliente removidos")

def replaces_in_code():
  api_file_path = path.join(FETCH_CLIENT_PATH, "api.ts")

  if not path.exists(api_file_path):
    print(f"❌ O arquivo {api_file_path} não existe")
    exit(1)

  with open(api_file_path, "r", encoding='utf8') as filein:
    data = filein.read()
    data = re.sub(r"const BASE_PATH.+", r'const BASE_PATH = `${process.env.NEXT_PUBLIC_SOLAR_API_URL}`.replace(/\/+$/, "");', data)
    data = re.sub(r"protected configuration: Configuration;", r'protected configuration?: Configuration;', data)
    data = re.sub('export class RequiredError extends Error {\n.+name: "RequiredError"', r'export class RequiredError extends Error {', data)
    data = re.sub(r'delete localVarUrlObj.search;', r'localVarUrlObj.search = null;', data)

    with open(api_file_path, "w", encoding='utf8') as fileout:
      fileout.write(data)
      print("✅ Realizado substituições no código")

def remove_old_code():
  if path.exists(GENERATED_CODE_OUTPUT_PATH):
    shutil.rmtree(GENERATED_CODE_OUTPUT_PATH)

    print(f"✅ Removido o diretório {FETCH_CLIENT_PATH}")

def copy_new_code():
  shutil.copytree(FETCH_CLIENT_PATH, GENERATED_CODE_OUTPUT_PATH)
  print(f"✅ Copiado novo código para o diretório {GENERATED_CODE_OUTPUT_PATH}")
  shutil.rmtree(FETCH_CLIENT_PATH)
  print(f"✅ Removido código cliente do diretório {TMP_PATH}")

def main():
  check_java()
  check_tmp_dir()
  check_credentials_file()
  api_url, api_key = read_credentials()
  check_swagger_gen_cli()

  if DOWNLOAD_CLIENT_CODE:
    download_client_code(api_url, api_key)
  else:
    download_solar_openapi(api_url, api_key)
    generate_client_code()

  remove_files()
  replaces_in_code()
  remove_old_code()
  copy_new_code()

if __name__ == "__main__":
  main()
