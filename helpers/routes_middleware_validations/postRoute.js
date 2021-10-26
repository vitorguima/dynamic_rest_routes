const postController = require('../../controllers/postController');

const postRoute = (options, router, mininumLength) => {
  const { validations } = options;

  if (validations.post.length >= mininumLength) {
    return router.post(`/${options.path}`,
      [...validations.post],
      postController(options)
    );
  }

  return router.post(`/${options.path}`, postController(options));
}

module.exports = postRoute;