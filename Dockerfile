# Usa uma imagem Node.js como base
FROM node:18

# Instala o Bun
RUN curl -fsSL https://bun.sh/install | bash

# Coloca o Bun no PATH
ENV BUN_INSTALL="/root/.bun"
ENV PATH="${BUN_INSTALL}/bin:${PATH}"

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências usando Bun
RUN bun install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta em que o Elysia rodará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["bun", "dev"]
