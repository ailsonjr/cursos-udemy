const http = require('http');
const handle = require('./handle');

let server = http.createServer(handle);

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000')
})
