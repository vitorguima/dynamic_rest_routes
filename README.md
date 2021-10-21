# Express Routes Creator

## A small package to create routes using express router.

### How to use Express Routes Creator:

* Set a default express application, require 'rest-routes-creator', define specifics options to create your route.

```bash
const express = require('express');
const createRoutes = require('rest-routes-creator');

const app = express();

const options = {
  path: 'route name',
  database: 'mongodb',
  collection: 'collection name',
    req: {
      body: {},
      params: 'id',
    }
  },
  controllers: {},
  models: {},
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
  req: {
    body: {
      example: 'data received from req.body',
    },
    params: 'data received from req.params'
  }
  # only if you want custom controllers. By default, the createRoutes implement some patterns for the created routes.
  controllers: {
    get: ['array of callbacks'],
    post: ['array of callbacks'],
    put: ['array of callbacks'],
    delete: ['array of callbacks'],
  },
    # only if you want custom models. By default, the createRoutes implement some patterns for the created routes.
  models: {
    get: ['array of callbacks'],
    post: ['array of callbacks'],
    put: ['array of callbacks'],
    delete: ['array of callbacks'],
  }
}
```