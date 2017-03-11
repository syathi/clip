var exp4 = require('express');
var routes4 = exp4.Router();
var knex4 = require('../models/Model');
routes4.get('/', function (req, res, next) {
    res.render("counter");
    res.end();
});
routes4.post('/create', function (req, res, next) {
    console.log(req.body);
    var clear = req.body.isclear == "on" ? true : false;
    knex4("climb_log").insert({
        user: req.body.user,
        area: req.body.area,
        problem_name: req.body.name,
        grade: req.body.grade,
        attempt: req.body.attempt,
        isclear: clear,
        comments: req.body.comment
    }).then(function (result) {
        console.log(result);
        res.redirect("/top");
        //res.end();
    });
});
module.exports = routes4;
