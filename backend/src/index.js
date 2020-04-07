const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Tipos de parâmetros
*Query Params: vai direto na roda após ? (filtros, paginação)
*Route Params: utilizado pra identificar recursos (/users/1)
*Request Body: Corpo da Requisição, utilizado para criar ou alterar recursos
*/ 

app.listen(3333);