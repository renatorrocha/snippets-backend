# Usa uma imagem Node.js como base
FROM node:18

# Instala o Bun
RUN curl -fsSL https://bun.sh/install | bash

# Define o diretório de instalação do Bun e adiciona ao PATH
ENV BUN_INSTALL="/root/.bun"
ENV PATH="${BUN_INSTALL}/bin:${PATH}"

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências do projeto
COPY package*.json ./

# Instala as dependências usando Bun
RUN bun install

# Copia o restante do código para o contêiner
COPY . .

# Expõe a porta que a aplicação vai usar
EXPOSE 3000

# Gera o cliente Prisma
RUN bun prisma generate

# Executa a migração do Prisma para o banco de dados
RUN bun prisma migrate deploy

# Comando para iniciar a aplicação
CMD ["bun", "run", "start:prod"]
