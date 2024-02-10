const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

const comments = [
   { username: "User1", text: "Ini adalah komentar pertama." },
   { username: "User2", text: "Saya setuju dengan pendapat Anda." },
   { username: "User3", text: "Terima kasih atas informasinya." },
   { username: "User4", text: "Apa pendapat Anda tentang topik ini?" },
   { username: "User5", text: "Sangat menarik, saya ingin tahu lebih banyak." }
 ];
 

const PORT = 8080;

app.get('/comments', (req, res) => {
   res.render('comments', { comments });
});

app.listen(PORT, () => {
   console.log(`server running at http://localhost:${PORT}`);
});