const putController = require('../../controllers/putController');

const putRoute = (options, router, mininumLength) => {
  const { validations } = options;

  if (validations.put.length >= mininumLength) {
    return router.put(`/${options.path}/:${options.req.params}`,
      [...validations.put],
      putController(options)
    );
  }

  return router.put(`/${options.path}/:${options.req.params}`, putController(options));
}

module.exports = putRoute;
