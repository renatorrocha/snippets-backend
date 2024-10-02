FROM oven/bun:latest AS build

WORKDIR /app

# Copiar os arquivos necessários
COPY package.json bun.lockb ./
RUN bun install

COPY . .

# Gerar o Prisma Client no build
RUN bun prisma generate

# Compilar a aplicação
RUN bun run build 

# Expor a porta
EXPOSE 3000

# No runtime, rodar as migrações e iniciar o servidor
CMD ["sh", "-c", "bun run start:prod"]
