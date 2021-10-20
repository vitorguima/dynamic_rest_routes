const connection = require('../../connection/mongoConnection');
const { db } = require('../../dbexample');

const databaseMethods = {
  mongodb: {
    get: async (collection) => await connection()
      .then((db) => db.collection(collection).find().toArray()),
    post: async (collection, data) => await connection()
      .then((db) => db.collection(collection)).insertOne(data),
    put: async (collection, identifier, data) => await connection()
      .then((db) => db.collection(collection)).updateOne(identifier, data),
    delete: async (collection, identifier) => await connection()
      .then((db) => db.collection(collection)).removeOne(identifier),
  },
  db: {
    get: (tableName) => Object.values(db[tableName].DATA)
  },
}

module.exports = databaseMethods;

