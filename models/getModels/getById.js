const { ObjectId } = require('mongodb');
const databaseMethods = require('../../helpers/database_requests_methods/genericMethods');

async function getById(options, params) {
  const { 
    collection,
    database,
  } = options;
  const getParam = { _id: ObjectId(params.id) };

  try {
    const list = await databaseMethods[database].getById(collection, getParam)
    return list;
  } catch {
    return {
      err: {
        code: 'invalid_data',
        message: 'could not find reffered element id',
      }
    }
  }
}

module.exports = getById;