const databaseMethods = require('../helpers/database_requests_methods/genericMethods');

async function post(options, body) {
  try {
    await databaseMethods[options.database].post(options.collection, body);
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
