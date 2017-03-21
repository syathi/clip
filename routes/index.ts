const exp = require('express');
const rout = exp.Router();
const knex = require('../models/Model');


/* GET home page. */
rout.get('/', function(req, res, next) {
	res.render("index");
	res.end();
});

module.exports = rout;
