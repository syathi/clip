var exp = require('express');
var rout = exp.Router();
var knex = require('../models/Model');
/* GET home page. */
rout.get('/', function (req, res, next) {
    res.render("index");
    res.end();
});
rout.post('/login', function (req, res, next) {
    knex("user").where({
        user: req.body.user,
        password: req.body.password
    })
        .then(function (dbRes) {
        if (dbRes.length == 1) {
            res.send("ok");
            res.end();
        }
        else {
            res.send("bad");
            res.end();
        }
    });
    console.log(req.body.user);
    console.log(req.body.password);
});
module.exports = rout;
