# NLW Valoriza

server.ts -> controllers -> services -> repositories -> database
## Regras

- Cadastro de Usuário
    
    [ x ] Não é permitido cadastrar mais de um usuário o mesmo e-mail
    
    [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

    [ x ] Não é permitido cadastrar tag sem nome

    [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome

    [ x ] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

    [ ] Não é permitido um usuário cadastrar um elogio para si

    [ ] Não é permitido cadastrar elogios para usuários inválidos

    [ ] O Usuário precisa estar autenticado na aplicação


## Dependencias:
    - yarn
    - typescript -D
    - express
    - @types/express -D [tipagem do express]
    - ts-node-dev -D [converte automaticamente ts. para js.]
    - typeORM (ORM tipado)
    - reflect-metadata
    - sqlite3
    - uuid
    - @types/uuid -D
    - express-async-errors
    - jsonwebtoken
    - @types/jsonwebtoken -D
    - bcryptjs
    - @types/bcryptjs -D

## Importante para o projeto funcionar:
    - Instale o YARN
    - Inicie o projeto com 'yarn init -y'
    - Adicione a dependencia do typescript 
    - Inicialize o typescript com 'yarn tsc --init'
    - Vá em tsconfig.json e coloque o strict para false
    - Para converter o arquivo ts. para js. use 'yarn tsc'
    - Após instalar o ts-node-dev, vá no package.json e adicione o script: "scripts": {"dev": "ts-node-dev src/server.ts"}
    - Para instalar o typeORM, reflect-metadata e o sqlite3: yarn add typeorm reflect-metadata sqlite3
    - Adicione o typeorm nos scripts do package.json o local do cli
    - experimentalDecorators: true
    - emitDecoratorMetadata: true
    - strictPropertyInitialization: false
    - na hora que for sobrescrever algo e criar a pasta @types, vá no "tsconfig.json", no "typeRoots", descomente-o e adicione o "./src/@types"

## Documentação:
    * yarn -- https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
    * express -- https://expressjs.com/pt-br/ 
    * typeORM -- https://typeorm.io/#/

## Comandos úteis
    - yarn typeorm migrations:create -n CreateUsers

## ---------------
    - Services são regras de negócio
    - recomendado: MD5 HASH GENERATOR https://www.md5hashgenerator.com/