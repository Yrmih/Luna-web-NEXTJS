FROM node:20-alpine AS base

# 1. Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

ENV APP_HOME=/home/node/app
RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm ci
# 2. Rebuild the source code only when needed
FROM base AS builder

ENV APP_HOME=/home/node/app
RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}

COPY --from=deps ${APP_HOME}/node_modules ./node_modules
COPY . .
# This will do the trick, use the corresponding env file for each environment.
COPY .env.production .env.production
RUN  npm run build

RUN npm prune --omit=dev

# 3. Production image, copy all the files and run next
FROM base AS runner

ENV APP_HOME=/home/node/app
RUN mkdir -p ${APP_HOME}
WORKDIR ${APP_HOME}

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder ${APP_HOME}/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs ${APP_HOME}/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs ${APP_HOME}/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]