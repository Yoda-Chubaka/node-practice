const express = require('express');
const router = express.Router();

// визначимо домашній роутер
router.get('/', (req, res) => {
  res.send('Це головний роутер');
});

// визначимо роутер about
router.get('/about', (req, res) => {
  res.send('About');
});

module.exports = router;

const myRouter= require('./my-router');

app.use('/my-router', myRouter);

app.all('/anything', (req, res, next) => {
  console.log('Anything method.');
  next(); // передаємо управління далі
});

app
  .route('/blog')
  .get((req, res) => {
    res.send('Get a list of blog');
  })
  .post((req, res) => {
    res.send('Add a record to blog');
  })
  .put((req, res) => {
    res.send('Update blog');
  });