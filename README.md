Segue abaixo um exemplo de um arquivo `README.md` que explica como rodar o projeto utilizando Docker e Docker Compose:
# Brain AG API

Peço desculpas, mas devido ao tempo disponível, não consegui realizar todos os testes unitários necessários. Para demonstrar meu conhecimento sobre testes, desenvolvi um exemplo no arquivo `create-farmer.use-case.spec.ts`.
Em relação à documentação, também não consegui finalizá-la por completo, mas utilizei o **`@nestjs/swagger`** para documentar o mínimo necessário. Você pode acessar a documentação gerada automaticamente na URL: http://localhost:3000/api ().
Neste projeto, tentei implementar uma **arquitetura limpa em camadas**, seguindo conceitos como **SOLID**, **injeção de dependências** e boas práticas recomendadas.

Este projeto é uma API utilizando **NestJS** e **Prisma**, configurada para rodar em um ambiente **Docker**. O banco de dados utilizado é PostgreSQL, gerenciado pelo Docker Compose.
## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Docker]()
- [Docker Compose]()

## Configuração do Banco de Dados
Certifique-se de que o arquivo de configuração do banco de dados (`.env`) esteja configurado corretamente antes de iniciar o ambiente. Exemplo de variáveis no `.env`:
``` 
DATABASE_URL=postgresql://user:password@pg_container_name:5432/database_name?schema=public
```
**Notas:**
- Substitua `user`, `password`, e `database_name` pelas informações adequadas.
- O `pg_container_name` deve ser o nome do container PostgreSQL (definido no `docker-compose.yml`).

## Como rodar o projeto com Docker Compose
Siga as etapas abaixo para iniciar o projeto utilizando `docker-compose.yml`.
### 1. Clone o repositório
Clone este repositório em sua máquina:
``` bash
git clone https://seu-repositorio.git
cd brain-ag-api
```
### 2. Configure o ambiente
Crie um arquivo `.env` na raiz do projeto (ou copie o arquivo de exemplo `.env.example`) e ajuste as variáveis com base na configuração de seu ambiente:
``` bash
cp .env.example .env
```
**Exemplo de variáveis:**
- `DATABASE_URL` → (url de conexão do banco)
- `PORT` → Porta para o NestJS (ex.: 3000)

### 3. Suba o ambiente com Docker Compose
Com tudo configurado, use o comando abaixo para inicializar os containers (API e banco de dados):
``` bash
docker compose up --build
```
Esse comando irá:
- Criar e iniciar os containers `brain-ag-nest` (API NestJS) e `brain-ag-pg` (PostgreSQL).
- Construir as imagens, instalar as dependências e gerar o Prisma Client automaticamente.

Após alguns segundos, a aplicação estará rodando.
### 4. Acesse a aplicação
Acesse a API através do navegador ou de ferramentas como **Postman** e **Insomnia**. Por padrão, ela estará acessível em:
- **API principal:** `http://localhost:3000`
- **Documentação Swagger:** `http://localhost:3000/api`

Caso tenha alterado a porta no arquivo `.env`, substitua o valor correspondente.
### 5. Gerenciando o Prisma
Caso queira rodar comandos do Prisma (como migração ou geração do client) diretamente no container, abra um terminal e execute os comandos dentro do **container da aplicação**:
1. Acesse o container da API NestJS:
``` bash
   docker exec -it brain-ag-nest sh
```
1. Execute comandos do Prisma como:
``` bash
   npx prisma migrate dev
   npx prisma studio
```
### Comandos Úteis
#### Subir o ambiente
``` bash
docker compose up --build
```
#### Parar o ambiente
``` bash
docker compose down
```
#### Parar e remover volumes (dados do banco serão apagados!)
``` bash
docker compose down --volumes
```
#### Ver os logs dos containers
``` bash
docker compose logs -f
```
### Estrutura Geral do Projeto
``` bash
brain-ag-api/
├── src/
│   ├── app.module.ts         # Módulo principal da aplicação
│   ├── database/
│   │   ├── prisma.service.ts # Configuração do Prisma
│   │   ├── schema.prisma     # Arquivo do Prisma Schema
│   └── main.ts               # Arquivo de inicialização principal do NestJS
├── package.json              # Gerenciador de dependências
├── Dockerfile                # Imagem do container para aplicação
├── docker-compose.yml        # Configuração Docker Compose
├── .env                      # Variáveis de ambiente
└── README.md                 # Documentação do Projeto
```
### Passos para Configuração Local (Opcional)
Caso prefira rodar o projeto fora do Docker, siga os passos abaixo:
1. Instale as dependências:
``` bash
   npm install
```
1. Certifique-se de que o PostgreSQL está rodando e configure o arquivo `.env`.
2. Gera os artefatos do Prisma:
``` bash
   npx prisma generate
```
1. Rode as migrações:
``` bash
   npx prisma migrate dev
```
1. Inicie o servidor NestJS:
``` bash
   npm run start:dev
```
A aplicação estará disponível em `http://localhost:3000`.
