let express = require('express');
let router = express.Router();

router.use((req, res, next) => {
  console.log('Middleware executado com sucesso!');
  next();
});

router.get('/', (req, res) => res.send('Hello from simple server :)'));
router.get('/welcome', (req, res) => res.send('Welcome to Express'));

router.get('/request/:name', (req, res) => res.send(req.params.name));

router.post('/body', (req, res) => res.json(req.body.name));

router.get('/response', (req, res) => res.send('text'));

module.exports = router;
