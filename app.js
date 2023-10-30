const express = require('express');

const books = require("./books");

const app = express();

app.get('/books', (req, res) => {
  res.send(books);
});

app.listen(4000);

