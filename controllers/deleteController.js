const remove = require('../models/deleteModel');

module.exports = function defineDeleteController(options) {  
  const deletController = async (req, res) => {
    const { params } = req;
    const removedData = await remove(options, params);
    return res.status(200).json(removedData);
  }

  return deletController;
};
