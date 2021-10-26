const getController = require('../../controllers/getController');

const getRoute = (options, router, mininumLength) => {
  const { validations } = options;

  if (validations.get.length >= mininumLength) {
    return router.get(`/${options.path}`, 
      [...validations.get],
      getController.getList(options)
    );
  }

  return router.get(`/${options.path}`, getController.getList(options));
}

module.exports = getRoute;
