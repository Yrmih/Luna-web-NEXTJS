# 1. Base image with necessary dependencies
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat

USER node

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./
RUN npm ci


COPY --chown=node:node . .

# 6. Command to run your tests
CMD ["npm", "run", "test"]