const { ObjectId } = require('mongodb');
const databaseMethods = require('../../helpers/database_requests_methods/genericMethods');

async function getById(options, params) {
  const { 
    collection,
    database,
    databaseName
  } = options;

  let getParam = params[options.req.params];

  if (getParam.length === 24) {
    getParam = { _id: ObjectId(params[options.req.params]) }
  }
  
  try {
    const list = await databaseMethods[database].getById(collection, getParam, databaseName);
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