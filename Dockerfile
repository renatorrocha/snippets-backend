FROM oven/bun:latest AS build

WORKDIR /app

# Copiar os arquivos necessários
COPY package.json bun.lockb ./
RUN bun install

COPY . .

# Gerar Prisma Client
RUN bun prisma generate

# Aplicar migrações (opcional)
RUN bun prisma migrate deploy

# Compilar a aplicação
RUN bun build ./src/server.ts --outdir ./build

# Expor a porta
EXPOSE 3000

# Iniciar a aplicação
CMD ["bun", "./build/server.js"]