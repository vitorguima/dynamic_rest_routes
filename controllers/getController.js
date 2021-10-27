const getAll = require('../models/getModels/getAll');
const getById = require('../models/getModels/getById');

function getList(options) {
  const getMiddleware = async (_req, res) => {
    const list = await getAll(options);
    return res.status(200).json(list);
  }

  return getMiddleware;
}

function getItem(options) {
  const getByParamMiddleware = async (req, res) => {
    const { params } = req;
    const item = await getById(options, params);
    return res.status(200).json(item);
  }

  return getByParamMiddleware;
}

module.exports = {
  getList,
  getItem,
}
