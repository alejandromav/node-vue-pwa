/*global require, module */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.send({ foo: 'bar' });
});

module.exports = router;
