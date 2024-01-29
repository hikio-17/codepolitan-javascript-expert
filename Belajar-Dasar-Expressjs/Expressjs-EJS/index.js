const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
   res.render('home');
});

app.get('/random', (req, res) => {
   const random = Math.floor(Math.random() * 10);

   res.render('random', { random });
});

app.get('/t/:tag', (req, res) => {
   const { tag } = req.query;

   res.render('tag', { tag });
});

app.listen(8080, () => {
   console.log('server running at http://localhost:8080');
});