# Etapa 1: Build
FROM node:18-alpine AS builder

# Configuração do diretório de trabalho
WORKDIR /app

# Copiar arquivos essenciais
COPY package.json package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: Servir os arquivos estáticos
FROM nginx:stable-alpine

# Remover configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar arquivos de build para o diretório padrão do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta padrão do Nginx
EXPOSE 80

# Iniciar o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
