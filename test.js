const express = require('express');
const createRoutes = require('./createRoute');

const app = express();

const options = {
  path: 'users',
  controllers: null,
}

app.use(express.json());
app.use(createRoutes(options));
// console.log(createRoutes(options))

// app.get('/users', (req, res) => res.status(200).json({ message: 'users route' }));

// console.log(app)

app.listen(3000, () => console.log('rodando porta 3000'));
