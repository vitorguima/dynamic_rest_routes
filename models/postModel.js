const databaseMethods = require('../helpers/database_requests_methods/genericMethods');

async function post(options, body) {
  const { collection, databaseName } = options;
  try {
    await databaseMethods[options.database].post(collection, body, databaseName);
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
