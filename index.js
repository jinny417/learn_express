const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World111!');
});

app.get('/abc', (req, res) => {
  res.send('cool!');
});

app.get('/search/:secret', (req, res) => {
  console.log('params', req.params);
  console.log('query', req.query);
  res.send("okay")
});

app.listen(8000);
