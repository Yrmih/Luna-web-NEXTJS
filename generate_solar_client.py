#!/usr/bin/env python3

from os import path

from utils.swagger_file_generate import SwaggerFileGenerate

BASE_DIR_PATH = path.realpath(path.dirname(__file__))
TMP_DIR_PATH = path.join(BASE_DIR_PATH, ".tmp")

# Essas constantes devem ser alteradas para se adequar
# ao código do backend que se queira gerar
CREDENTIALS_FILE_PATH = path.join(
    BASE_DIR_PATH,
    ".apikey-solar.config"
)
GENERATED_CODE_OUTPUT_PATH = path.join(
    BASE_DIR_PATH,
    "src",
    "lib",
    "solar-client",
)
SWAGGER_FILENAME = "solar-api-swagger.json"
API_CLASS_NAME = "SolarApi"
ENDPOINT_ENV_VAR = "SOLAR_API"


def main():
    swagger_file_generate = SwaggerFileGenerate(
        basedir=BASE_DIR_PATH,
        tmpdir=TMP_DIR_PATH,
        credentials_filepath=CREDENTIALS_FILE_PATH,
        output_dir=GENERATED_CODE_OUTPUT_PATH,
        swagger_filename=SWAGGER_FILENAME,
        api_class_name=API_CLASS_NAME,
        endpoint_env_var=ENDPOINT_ENV_VAR,
    )

    swagger_file_generate.run()


if __name__ == "__main__":
    main()
