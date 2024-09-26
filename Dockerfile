FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

COPY . . 

RUN bun i
RUN bunx prisma generate
RUN bun run build

CMD ['bun', 'run', "start:prod"]