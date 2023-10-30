const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get('/contact', (req, res) => {
  res.send('<h1>Contact page</h1>');
});

app.use((req, res, next) => {
  console.log('Наше проміжне ПЗ');
  next();
});

app.get('/contact/:id', (req, res) => {
  res.send(`<h1>Contact</h1> Параметр: ${req.params.id}`);
});

app.patch('/user/:userid', (req, res) => {
  const id = req.params.userid;
  // виконуємо необхідні дії
});

app.use(express.urlencoded({ extended: false }));

{/* <form action="/login" method="POST">
  <label for="email">Email</label>
  <input type="text" name="email" id="email" />
  <label for="password">Пароль</label>
  <input type="password" name="password" id="password" />
  <button type="submit">Увійти</button>
</form> */}

app.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});

app.use(express.json());

app.post('/login', (req, res, next) => {
  const { email, password } = req.body;
  // Виконуємо необхідні операції
});

