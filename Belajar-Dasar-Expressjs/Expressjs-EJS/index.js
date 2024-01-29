const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
   res.render('home');
});

app.listen(8080, () => {
   console.log('server running at http://localhost:8080');
});