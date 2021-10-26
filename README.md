# Rest routes creator

Rest routes creator is a Javascript library to accelerate the process of creating routes with the [express framework](https://github.com/expressjs/express). It will return the methods GET, POST, PUT and DELETE for an specific endpoint. There are no default validations for your routes but you can create custom middlewares for it.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/rest-routes-creator) to install rest-routes-creator.

```bash
npm i rest-routes-creator
```

## Usage

Set a default node-express application and use the **rest-routes-creator** following the example below:

```javascript
const express = require('express');
const createRoutes = require('./createRoute');
const app = express();

const options = {
  path: 'route path name',
  database: 'mongodb',
  databaseName: 'name of the database your collection is in',
  collection: 'name of the colletion your documents is in',
  req: {
    params: 'name of the param your middleware will receive on "req" object',
  },
// validations must be an array of callbacks (express middleware functions).
  validations: {
    getById: [],
    delete: [],
    post: [],
    put: [],
  },
};

app.use(express.json());
// this is how you will instantiate the lib into your code.
app.use(createRoutes(options));
app.listen(3000, () => console.log('rodando porta 3000'));
```

## Comments about the current state of this library
- Allows users to create as many routes as they want (no problems instantiating this lib more than once).
- Works only with mongodb connections (this part stills hardcoded).
- Allows the user to create custom middleware for it's generated routes.
- Models follows a default pattern that can't be changed at the moment (this part stills hardcoded).

## License
[MIT](https://choosealicense.com/licenses/mit/)
