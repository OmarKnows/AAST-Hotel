const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./config/db');
const router = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();
const app = express();

connect();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', '*');

  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());

app.use('/', router);
app.use('/', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Your app is running');
});
