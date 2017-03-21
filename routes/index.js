var exp = require('express');
var rout = exp.Router();
var knex = require('../models/Model');
/* GET home page. */
rout.get('/', function (req, res, next) {
    res.render("index");
    res.end();
});
module.exports = rout;
