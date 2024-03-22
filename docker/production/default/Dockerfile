FROM node:20-slim

USER node

ENV APP_HOME=/home/node/app
RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}

COPY --chown=1000:1000 package.json package-lock.json ${APP_HOME}/

RUN npm ci

COPY --chown=1000:1000 . ${APP_HOME}

RUN npm run build

EXPOSE 3000

CMD [ "yarn", "start" ]
