// console.log('Ini File dari args.js');
// console.log(process.argv);

const args = process.argv.slice(2);

for (let arg of args) {
   console.log(`Selamaat datang, ${arg}`);
}

