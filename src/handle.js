module.exports = (request, response) => {

  let html = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App com http e NodeJs</title>
  </head>
  
  <body>
    <h1>Olá, Bem vindo ao módulo http do nodejs</h1>
    <p>Usando módulo externo</p>
  </body>
  
  </html>
  `;

  response.write(html);
  response.end();
}