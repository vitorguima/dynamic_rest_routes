const express = require('express');

const getController = require('./controllers/getController');
const deleteController = require('./controllers/deleteController');
const postController = require('./controllers/postController');
const putController = require('./controllers/putController');

function createRoutes(options) {
  const router =  express.Router();

  router.get(`/${options.path}`, getController.getList(options));
  router.get(`/${options.path}/:${options.req.params}`, getController.getItem(options));
  router.delete(`/${options.path}/:${options.req.params}`, deleteController(options));
  router.post(`/${options.path}`, postController(options));
  router.put(`/${options.path}/:${options.req.params}`, putController(options));

  return router;
}

module.exports = createRoutes;
