FROM oven/bun:latest AS build

WORKDIR /app

# Copiar os arquivos necessários
COPY package.json bun.lockb ./
RUN bun install

COPY . .

# Gerar o Prisma Client
RUN bun prisma generate

# Expor a porta
EXPOSE 3000

# No runtime, rodar as migrações e rodar o servidor diretamente (sem bundling)
CMD ["sh", "-c", "bun prisma migrate deploy && bun ./src/server.ts"]