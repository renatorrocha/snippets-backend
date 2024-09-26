# Use a imagem base do Node.js
FROM node:20-alpine AS build

# Defina o diretório de trabalho
WORKDIR /app

# Instale o curl e o bash
RUN apk add --no-cache curl bash

# Instale o Bun usando 'sh' em vez de 'bash'
RUN curl -fsSL https://bun.sh/install | sh

# Defina as variáveis de ambiente para o Bun
ENV BUN_INSTALL="/root/.bun"
ENV PATH="$BUN_INSTALL/bin:$PATH"

# Copie os arquivos package*.json
COPY package*.json ./

# Copie o restante do código
COPY . .

# Instale as dependências usando o Bun
RUN $BUN_INSTALL/bin/bun i

# Gere o Prisma Client
RUN $BUN_INSTALL/bin/bunx prisma generate

# Construa o projeto
RUN $BUN_INSTALL/bin/bun run build

# Comando para iniciar a aplicação
CMD ["$BUN_INSTALL/bin/bun", "run", "start:prod"]
