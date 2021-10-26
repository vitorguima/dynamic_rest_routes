const getController = require('../../controllers/getController');

const getRouteById = (options, router, mininumLength) => {
  const { validations } = options;

  if (validations.getById.length >= mininumLength) {
    return router.get(`/${options.path}/:${options.req.params}`,
      [...validations.getById],
      getController.getItem(options)
    );
  }

  return router.get(`/${options.path}/:${options.req.params}`, getController.getItem(options));
}

module.exports = getRouteById;
