const express = require('express');

const defineGetController = require('./controllers/getController');
const defineDeleteController = require('./controllers/deleteController');

function createRoutes(options) {
  const router =  express.Router();

  router.get(`/${options.path}`, defineGetController(options));
  router.get(`/${options.path}/:${options.req.params}`);
  router.delete(`/${options.path}/:${options.req.params}`, defineDeleteController(options));
  router.post(`/${options.path}`);
  router.put(`/${options.path}/:${options.req.params}`);

  return router;
}

module.exports = createRoutes;
