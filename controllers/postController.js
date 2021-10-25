const post = require('../models/postModel');

function postController(options) {
  const postController = async (req, res) => {
    const body = req.body;

    await post(options, body);
    return res.status(200).json(body);
  }

  return postController;
}

module.exports = postController;
