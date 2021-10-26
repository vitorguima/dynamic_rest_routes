const { db } = require('../../exampleDB');

const updateExampleDB = (tableName, identifier, data) => {
  delete db[tableName].DATA[identifier];
  db[tableName].DATA[identifier] = data;
  return data;
}

module.exports = updateExampleDB;
