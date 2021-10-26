const express = require('express');
const createRoutes = require('./createRoute');
const app = express();

const testMiddleware = require('./middlewares/testMiddleware');

const options = {
  path: 'linhas',
  database: 'mongodb',
  databaseName: 'aggregations',
  collection: 'air_airlines',
  req: {
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
app.use(createRoutes(options));
app.listen(3000, () => console.log('rodando porta 3000'));
