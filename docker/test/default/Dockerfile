# 3. Production image, copy all the files and run next
FROM ${CI_REGISTRY_IMAGE}:${DOCKER_IMAGE_TAG:-latest}

WORKDIR /home/node/app

CMD ["npm", "run", "test"]