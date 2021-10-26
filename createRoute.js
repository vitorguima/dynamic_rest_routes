const express = require('express');

// const getController = require('./controllers/getController');
// const deleteController = require('./controllers/deleteController');
// const postController = require('./controllers/postController');
// const putController = require('./controllers/putController');

const getRoute = require('./helpers/routes_middleware_validations/getRoute');
const getByIdRoute = require('./helpers/routes_middleware_validations/getByIdRoute');
const deleteRoute = require('./helpers/routes_middleware_validations/deleteRoute');
const postRoute = require('./helpers/routes_middleware_validations/postRoute');
const putRoute = require('./helpers/routes_middleware_validations/putRoute');

function createRoutes(options) {
  const router =  express.Router();
  const mininumLength = 1;

  getRoute(options, router, mininumLength);
  getByIdRoute(options, router, mininumLength);
  deleteRoute(options, router, mininumLength);
  postRoute(options, router, mininumLength);
  putRoute(options, router, mininumLength);

  return router;
}

module.exports = createRoutes;
