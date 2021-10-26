const getController = require('../../controllers/getController');

const getRoute = (options, router) => {

  return router.get(`/${options.path}`, getController.getList(options));
}

module.exports = getRoute;
