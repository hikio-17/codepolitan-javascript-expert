const path = require('path');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

const comments = [
   { id: uuidv4(), username: "User1", text: "Ini adalah komentar pertama." },
   { id: uuidv4(), username: "User2", text: "Saya setuju dengan pendapat Anda." },
   { id: uuidv4(), username: "User3", text: "Terima kasih atas informasinya." },
   { id: uuidv4(), username: "User4", text: "Apa pendapat Anda tentang topik ini?" },
   { id: uuidv4(), username: "User5", text: "Sangat menarik, saya ingin tahu lebih banyak." }
 ];
 

const PORT = 8080;

app.get('/comments', (req, res) => {
   res.render('comments', { comments });
});

app.get('/comments/create', (req, res) => {
   res.render('comments/create');
});

app.get('/comments/:id', (req, res) => {
   const { id } = req.params;
   const comment = comments.find((comment) => comment.id === id);
   res.render('comments/show', { comment });
});

app.post('/comments', (req, res) => {
   const { username, text } = req.body;
   comments.push({ id: uuidv4(), username, text });
   res.redirect('/comments');
});

app.get('/comments/:id/edit', (req, res) => {
   const { id } = req.params;
   const comment = comments.find((comment) => comment.id === id);

   res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
   const { id } = req.params;
   const { text } = req.body;
   const oldComment = comments.find((comment) => comment.id === id);

   oldComment.text = text;

   res.redirect('/comments');
});

app.listen(PORT, () => {
   console.log(`server running at http://localhost:${PORT}`);
});