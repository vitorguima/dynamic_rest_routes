const express = require('express');
const createRoutes = require('./createRoute');
const app = express();
const options = {
  path: 'clientes',
  database: 'db',
  collection: 'CLIENTES',
  req: {
    body: ['nome', 'sobrenome'],
    params: 'id',
  },
  validations: [],
  controllers: [],
  models: [],
};

const options2 = {
  path: 'clientes',
  database: 'mongodb',
  collection: 'clientes',
  req: {
    body: ['nome', 'sobrenome'],
    params: 'id',
  },
  validations: {
    get: [],
    getById: [],
    delete: [],
    post: [],
    put: [],
  },
  controllers: [],
  models: [],
};

app.use(express.json());
// app.use(createRoutes(options));
app.use(createRoutes(options2))
app.listen(3000, () => console.log('rodando porta 3000'));
