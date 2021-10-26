const databaseMethods = require('../../helpers/database_requests_methods/genericMethods');

async function getAll(options) {
  const { 
    collection, 
    database,
    databaseName
  } = options;

  try {
    const list = await databaseMethods[database].get(collection, databaseName)
    return list;
  } catch {
    return {
      err: {
        code: 'connection_fail',
        message: 'could not connect to the database',
      }
    }
  }
}

module.exports = getAll;
