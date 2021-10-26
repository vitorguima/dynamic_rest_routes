const { db } = require('../../exampleDB');
const fs = require('fs').promises;

const updateExampleDB = async (tableName, identifier, data) => {
  delete db[tableName].DATA[identifier];
  db[tableName].DATA[identifier] = data;

  await fs.writeFile('../exampleDB.js', db, 'utf-8');
  return data;
}

module.exports = updateExampleDB;
