# 1. Base image with necessary dependencies
FROM node:20-slim

USER node

ENV APP_HOME=/home/node/solar-frontend
RUN mkdir -p ${APP_HOME}

WORKDIR ${APP_HOME}

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY --chown=node:node . .

# 6. Command to run your tests
CMD ["npm", "run", "test"]