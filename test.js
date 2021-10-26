const express = require('express');
const createRoutes = require('./createRoute');
const app = express();

const testMiddleware = require('./middlewares/testMiddleware');

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
    getById: [],
    delete: [],
    post: [testMiddleware],
    put: [],
  },
  controllers: [],
  models: [],
};

app.use(express.json());
app.use(createRoutes(options2))
app.listen(3000, () => console.log('rodando porta 3000'));
