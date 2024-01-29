const express = require('express');

const app = express();

app.get('/orders', (req, res) => {
   res.send('get orders');
});

app.post('/orders', (req, res) => {
   res.send('post orders');
});

app.listen(8080, () => {
   console.log('server running at http://localhost:8080');
});