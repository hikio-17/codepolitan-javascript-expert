const express = require('express');

const app = express();

app.use('/', (req, res) => {
   res.send('ok');
});

app.listen(8080, () => {
   console.log('server running at http://localhost:8080');
});