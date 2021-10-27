const remove = require('../models/deleteModel');

function deleteController(options) {  
  const deleteMiddleware = async (req, res) => {
    const { params } = req;
    const removedData = await remove(options, params);
    return res.status(200).json(removedData);
  }

  return deleteMiddleware;
};

module.exports = deleteController;
