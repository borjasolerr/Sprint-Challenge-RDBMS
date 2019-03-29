const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('Hello from GET main request');
});

module.exports = app;
