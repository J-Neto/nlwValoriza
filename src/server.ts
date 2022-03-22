import express from "express";

// @types/express
const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

app.get('/test', (req, res) => {
    // Request => Entrando
    // Response => Saindo
    return res.send('Hello World');
});

app.post('/test-post', (req, res) => {
    return res.send('Hello World POST')
});

// http://localhost:3000
app.listen(3000, () => console.log('Server is running'));