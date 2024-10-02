FROM oven/bun:latest AS build

WORKDIR /app

# Copiar os arquivos necessários
COPY package.json bun.lockb ./
RUN bun install

COPY . .

# Compilar a aplicação
RUN bun build ./src/server.ts --outdir ./build

# Expor a porta
EXPOSE 3000

# No runtime, rodar migrations e gerar o Prisma Client
CMD ["sh", "-c", "bun prisma migrate deploy && bun prisma generate && bun ./build/server.js"]
