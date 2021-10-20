const express = require('express');

module.exports = async function createRoutes() {
  const router =  express.Router;
  const params = {
    path: () => 'ok',
    connection: () => '',
    method: () => '',
    services: () => '',
  }

  return params;
}

// rota para o Path informado => GET,PUT,POST,DELETE

paramObject = [{path}]

// GET: find()
// PUT: updateOne()
// POST: insertOne()
// DELETE: removeONe()
