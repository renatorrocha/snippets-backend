FROM oven/bun AS build

WORKDIR /app

# Cache packages installation
COPY package.json package.json
COPY bun.lockb bun.lockb
COPY . . 

RUN bun install

RUN bun prisma generate

# RUN bun prisma migrate deploy

RUN bun build ./src/server.ts --outdir ./build

WORKDIR /app

CMD ["bun", "./build/server.js"]

EXPOSE 3000
