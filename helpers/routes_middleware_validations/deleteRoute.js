const deleteController = require('../../controllers/deleteController');

const deleteRoute = (options, router, mininumLength) => {
  const { validations } = options;

  if (validations.delete.length >= mininumLength) {
    return router.delete(`/${options.path}/:${options.req.params}`,
      [...validations.delete],
      deleteController(options)
    );
  }

  return router.delete(`/${options.path}/:${options.req.params}`, deleteController(options));
}

module.exports = deleteRoute;
