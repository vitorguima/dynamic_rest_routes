const express = require('express');

const getRoute = require('./helpers/routes_middleware_validations/getRoute');
const getByIdRoute = require('./helpers/routes_middleware_validations/getByIdRoute');
const deleteRoute = require('./helpers/routes_middleware_validations/deleteRoute');
const postRoute = require('./helpers/routes_middleware_validations/postRoute');
const putRoute = require('./helpers/routes_middleware_validations/putRoute');

function createRoutes(options) {
  const router =  express.Router();
  const mininumCallbacksQty = 1;

  getRoute(options, router);
  getByIdRoute(options, router, mininumCallbacksQty);
  deleteRoute(options, router, mininumCallbacksQty);
  postRoute(options, router, mininumCallbacksQty);
  putRoute(options, router, mininumCallbacksQty);

  return router;
}

module.exports = createRoutes;
