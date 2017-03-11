var exp3 = require('express');
var routes3 = exp3.Router();
var knex3 = require('../models/Model');
routes3.get('/', function (req, res, next) {
    console.log("hoge");
    res.render("uplode");
    res.end();
});
routes3.post("/create", function (req, res, next) {
    console.log(req.body);
    //knex3("wall").insert({}).then( () => {} );
});
module.exports = routes3;
