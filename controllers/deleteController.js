const remove = require('../models/deleteModel');

function deleteController(options) {  
  const deletController = async (req, res) => {
    const { params } = req;
    const removedData = await remove(options, params);
    return res.status(200).json(removedData);
  }

  return deletController;
};

module.exports = deleteController;
