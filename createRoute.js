const express = require('express');

const defineGetController = require('./controllers/getController');

function createRoutes(options) {
  const router =  express.Router();

  router.get(`/${options.path}`, defineGetController(options.controllers));
  // router.post(`/${options.pathName}`, [...controllers.post]);
  // router.put(`/${options.pathName}`, [...controllers.put]);
  // router.delete(`/${options.pathName}`, [...controllers.delete])

  return router;
}

// OBJECT EXAMPLE FOR createRoutes FUNCTION INPUT PARAM

// const options = {
//   path: 'users',
//   collection: 'users',
//   controllers: {
//     get: [],
//     post: [],
//     put: [],
//     delete: [],
//   },
//   models: {
//     get: [],
//     post: [],
//     put: [],
//     delete: [],
//   }
// }

module.exports = createRoutes;
