const path = require('path');
const express = require('express');
const initialData = require('./data.json');

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
   const { tag } = req.params;

   const data = initialData[tag];

   console.log(tag);
   if (data) {
      res.render('tag', { data });
   } else {
      res.render('notfound', { tag });
   }
});

app.get('/pats', (req, res) => {
   const pats = {
      cats: ['Embul', 'Felix', 'Tiny'],
   };

   res.render('pats', { cats: pats.cats })
})

app.listen(8080, () => {
   console.log('server running at http://localhost:8080');
});