const fs = require('fs');

//  -- Para escrever um arquivo --
// fs.writeFile('myfile.txt', 'Hello World from Ailson', (err) => {
//   if (err) {
//     throw err;
//   }
// });

// -- Para ler um arquivo --
// fs.readFile('myfile.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data.toString('utf-8'));
// });

// -- Para ler os arquivos dentro de um diretório --
// fs.readdir('.', (err, files) => {
//   if (err) {
//     throw err;
//   }
//   for (let file in files) {
//     console.log(files[file]);
//   }
// });

// -- Filtrar e ler arquivos --
fs.readdirSync('.').filter(file => {
  return (file.endsWith('.js'))
}).forEach(file => {
  console.log(file);
});
