const express = require('express');
const home = require('./routes/home');
const client = require('./routes/client');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', home);
app.use('/client', client);


app.use((err, req, res, nest) => {
  res.status(500).json({ message: "Alguma coisa está errada" });
});

app.listen(port, () => console.log(`App listening http://localhost:${port}`));
