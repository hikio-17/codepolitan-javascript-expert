const fs = require('fs');

// asynchronous

// fs.mkdir('project', (err) => {
//    console.log('Fungsi di dalam callback');
//    if (err) console.log(err);
// });

// console.log('Fungsi setelah mkdir');

// fs.mkdirSync('project', (err) => {
//    console.log('fungsi didalam callback');
//    if (err) console.log(err);
// });
// console.log('folder berhasil dibuat');

const folderName = process.argv.slice(2) || 'Project';

try {
   fs.mkdirSync(`${folderName}`);
   fs.writeFileSync(`${folderName}/index.html`, '');
   fs.writeFileSync(`${folderName}/app.css`, '');
   fs.writeFileSync(`${folderName}/app.js`, '');
   console.log('Folder berhasil dibuat');
} catch (error) {
   console.log(error);
}

