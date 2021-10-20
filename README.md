# Express Routes Creator

## A small package to create routes using express router.

### How to use Express Routes Creator:

```bash
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
```


```bash
OBJECT EXAMPLE FOR createRoutes FUNCTION INPUT PARAM

const options = {
  path: 'users',
  collection: 'users',
  connection: 'mongodb',
  controllers: {
    get: ['array of callbacks'],
    post: ['array of callbacks'],
    put: ['array of callbacks'],
    delete: ['array of callbacks'],
  },
  models: {
    get: ['array of callbacks'],
    post: ['array of callbacks'],
    put: ['array of callbacks'],
    delete: ['array of callbacks'],
  }
}
```