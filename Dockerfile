# Use a imagem base do Node.js
FROM node:20-alpine AS build

# Defina o diretório de trabalho
WORKDIR /app

# Instale o Bun
RUN apk add curl \
    && curl -fsSL https://bun.sh/install | bash \
    && export BUN_INSTALL="/root/.bun" \
    && export PATH="$BUN_INSTALL/bin:$PATH"

# Copie os arquivos package*.json
COPY package*.json ./

# Copie o restante do código
COPY . .

# Instale as dependências usando o Bun
RUN /root/.bun/bin/bun i

# Gere o Prisma Client
RUN /root/.bun/bin/bunx prisma generate

# Construa o projeto
RUN /root/.bun/bin/bun run build

# Comando para iniciar a aplicação
CMD ["/root/.bun/bin/bun", "run", "start:prod"]
