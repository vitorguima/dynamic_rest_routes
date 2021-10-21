const databaseMethods = require('../helpers/database_requests_methods/databaseMethods');

async function post(options) {
  try {
    const list = await databaseMethods[options.database].get(options.collection)
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

module.exports = post;