const express = require('express');
const createRoutes = require('./createRoute');
const app = express();

const options = {
  path: 'clientes',
  database: 'mongodb',
  databaseName: 'deucredito',
  collection: 'clientes',
  req: {
    params: 'id',
  },
  validations: {
    getById: [],
    delete: [],
    post: [],
    put: [],
  },
  controllers: [],
  models: [],
};

app.use(express.json());
app.use(createRoutes(options));
app.listen(3000, () => console.log('rodando porta 3000'));