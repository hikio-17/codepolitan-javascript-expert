const express = require('express');

const app = express();

app.get('/', (req, res) => {
   res.send('This is Homepage');
});

app.get('/cats', (req, res) => {
   res.send('This is carts page');
});

// Route Parameter
app.get('/blogs/:judul', (req, res) => {
   const { judul } = req.params;

   res.send(`Anda sedang melihat blog dengan judul: ${judul}`);
});

app.get('/about', (req, res) => {
   res.send('This is about page');
});

app.get('*', (req, res) => {
   res.send('Halaman tidak ditemukan');
});

app.listen(8080, () => {
   console.log('server running at http://localhost:8080');
});

