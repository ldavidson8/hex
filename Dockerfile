FROM node:22-alpine as base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN npm i -g corepack@latest
RUN corepack enable

FROM base as build

COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN NODE_OPTIONS=--max-old-space-size=16384 ROLLDOWN_OPTIONS_VALIDATION=loose pnpm run build

FROM base as runner

COPY --from=build /app/build/ build/
# COPY --from=build /app/server/ server
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod

CMD ["node", "build"]