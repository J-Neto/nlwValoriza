## Dependencias:
    - typescript -D
    - express
    - @types/express -D [tipagem do express]
    - ts-node-dev -D [converte automaticamente ts. para js.]

## Importante:
    - Instale o YARN
    - Inicie o projeto com 'yarn init -y'
    - Adicione a dependencia do typescript 
    - Inicialize o typescript com 'yarn tsc --init'
    - Vá em tsconfig.json e coloque o strict para false
    - Para converter o arquivo ts. para js. use 'yarn tsc'
    - Após instalar o ts-node-dev, vá no package.json e adicione o script: "scripts": {"dev": "ts-node-dev src/server.ts"}