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

app.use(express.json());
app.use(createRoutes(options));
app.listen(3000, () => console.log('rodando porta 3000'));
