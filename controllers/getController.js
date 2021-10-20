const getAll = require('../models/getModel');

function defineGetController(options) {
  // if (options.controllers) {
  //   return options.controllers.get;
  // }

  const getController = async (_req, res) => {
    const list = await getAll(options);
    return res.status(200).json(list);
  }

  return getController;
}

module.exports = defineGetController;
