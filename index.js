const express = require('express');

const options = {
  pathName: 'users',
  collection: 'users',
  controllers: {
    get: [],
    post: [],
    put: [],
    delete: [],
  },
  models: {
    get: [],
    post: [],
    put: [],
    delete: [],
  }
}

module.exports = async function createRoutes(options) {
  const router =  express.Router;

  router.get(`/${options.pathName}`, [...controllers.get]);
  router.post(`/${options.pathName}`, [...controllers.post]);
  router.put(`/${options.pathName}`, [...controllers.put]);
  router.delete(`/${options.pathName}`, [...controllers.delete])

  return router;
}

