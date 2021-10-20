const express = require('express');

const defineGetController = require('./controllers/getController');

function createRoutes(options) {
  const router =  express.Router();

  router.get(`/${options.path}`, defineGetController(options));
  router.post(`/${options.pathName}`);
  router.put(`/${options.pathName}`);
  router.delete(`/${options.pathName}`)

  return router;
}

module.exports = createRoutes;
