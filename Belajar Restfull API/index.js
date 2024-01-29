const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/orders', (req, res) => {
   const { item, qty } = req.query;

   res.send(`GET ORDERS: ${item} - ${qty}`);
});

app.post('/orders', (req, res) => {
   const { item, qty } = req.body;
   res.send(`POST ORDERS: ${item} - ${qty}`);
});

app.listen(8080, () => {
   console.log('server running at http://localhost:8080');
});