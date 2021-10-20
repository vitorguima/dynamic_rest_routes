const express = require('express');
const createRoutes = require('./createRoute');

const app = express();

const options = {
  path: 'users',
  database: 'mongodb',
  collection: 'air_airlines',
  controllers: 'undefined',
}

app.use(express.json());
app.use(createRoutes(options));


app.listen(3000, () => console.log('rodando porta 3000'));
