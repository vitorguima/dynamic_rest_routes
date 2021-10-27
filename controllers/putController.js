const put = require('../models/putModel');

function postController(options) {
  const postMiddleware = async (req, res) => {
    const { body, params } = req;

    await put(options, params, body);
    return res.status(200).json(body);
  }

  return postMiddleware;
}

module.exports = postController;
