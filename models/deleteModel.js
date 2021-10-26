const { ObjectId } = require('mongodb');
const databaseMethods = require('../helpers/database_requests_methods/genericMethods');

async function remove(options, params) {
  const { collection, databaseName } = options;
  const deleteParam = { _id: ObjectId(params.id) };

  try {
    await databaseMethods[options.database].delete(collection, deleteParam, databaseName);
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

module.exports = remove;
