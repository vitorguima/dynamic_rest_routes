const express = require('express');

const getRoute = require('./helpers/routes_middleware_validations/getRoute');
const getByIdRoute = require('./helpers/routes_middleware_validations/getByIdRoute');
const deleteRoute = require('./helpers/routes_middleware_validations/deleteRoute');
const postRoute = require('./helpers/routes_middleware_validations/postRoute');
const putRoute = require('./helpers/routes_middleware_validations/putRoute');

function createRoutes(options) {
  const router =  express.Router();
  const mininumLength = 1;

  getRoute(options, router);
  getByIdRoute(options, router, mininumLength);
  deleteRoute(options, router, mininumLength);
  postRoute(options, router, mininumLength);
  putRoute(options, router, mininumLength);

  return router;
}

module.exports = createRoutes;
