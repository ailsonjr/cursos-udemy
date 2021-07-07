let express = require('express');
let router = express.Router();

router.get('/', (req, res) => res.send('Hello from simple server :)'));
router.get('/welcome', (req, res) => res.send('Welcome to Express'));

router.get('/request/:name', (req, res) => res.send(req.params.name));

router.post('/body', (req, res) => res.json(req.body.name));

module.exports = router;
