let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    message: 'Hello World from home.js'
  })
});
router.get('/welcome', (req, res) => res.send('Welcome to Express'));

router.get('/request/:name', (req, res) => res.send(req.params));

router.post('/body', (req, res) => res.json(req.body.name));

router.get('/response', (req, res) => res.send('text'));

module.exports = router;
