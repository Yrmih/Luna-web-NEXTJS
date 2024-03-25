# 3. Production image, copy all the files and run next
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

USER node

WORKDIR /home/node/app

COPY --chown=1000:1000 package.json package-lock.json ${APP_HOME}/

RUN npm ci

COPY --chown=1000:1000 . ${APP_HOME}

CMD ["npm", "run", "test"]