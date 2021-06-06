const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();

dotenv.config();

app.use(express.static(path.join(__dirname, 'front-end', 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT);
