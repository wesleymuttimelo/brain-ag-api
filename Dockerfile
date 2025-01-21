# node image
FROM node:22-alpine3.21

# Create app directory
WORKDIR /usr/src/app

# Copy files
COPY . .

# Instala as dependências
RUN npm install

# Gera o Prisma Client no ambiente Linux do container
RUN npx prisma generate --schema ./src/database/prisma/schema.prisma

# Expõe a porta padrão do NestJS
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]