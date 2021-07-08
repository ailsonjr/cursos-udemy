const express = require('express');
const path = require('path');
const home = require('./routes/home');
const client = require('./routes/client');
const provider = require('./routes/provider');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets', express.static('./assets'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', home);
app.use('/client', client);
app.use('/provider', provider);

app.listen(port, () => console.log(`App listening http://localhost:${port}`));
