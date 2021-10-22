const getAll = require('../models/getModels/getAll');
const getById = require('../models/getModels/getById');

function getList(options) {
  const get = async (_req, res) => {
    const list = await getAll(options);
    return res.status(200).json(list);
  }

  return get;
}

function getItem(options) {
  const getByParam = async (req, res) => {
    const { params } = req;
    const item = await getById(options, params);
    return res.status(200).json(item);
  }

  return getByParam;
}

module.exports = {
  getList,
  getItem,
}
