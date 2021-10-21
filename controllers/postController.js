const post = require('../models/postModel');

function definePostController(options) {
  const postController = async (req, res) => {
    const body = req.body;

    const list = await post(options);
    return res.status(200).json(list);
  }

  return postController;
}

module.exports = definePostController;
