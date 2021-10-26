const { ObjectId } = require('mongodb');
const databaseMethods = require('../helpers/database_requests_methods/genericMethods');

async function put(options, params, data) {
  const { collection } = options;

  let updateParam = params[options.req.params];

  if (updateParam.length === 24) {
    updateParam = { _id: ObjectId(params[options.req.params]) }
  }

  try {
    await databaseMethods[options.database].put(collection, updateParam, data);
    return {
      _id: params,
    };
  } catch {
    return {
      err: {
        code: 'invalid_data',
        message: 'could not find any data with the specified params',
      }
    }
  }
}

module.exports = put;
