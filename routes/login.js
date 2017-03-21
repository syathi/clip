var e = require('express');
var routes = e.Router();
var kne = require('../models/Model');
routes.get('/', function (req, res, next) {
    if (req.session.id) {
        res.redirect('top');
    }
    else {
        res.render('login');
    }
});
routes.post('/login', function (req, res, next) {
    kne("user").where({
        user: req.body.user,
        password: req.body.password
    })
        .then(function (dbRes) {
        if (dbRes.length == 1) {
            console.log(res);
            res.redirect("top", { message: "successed login" });
            res.end();
        }
        else {
            res.redirect("/", { message: "failed to login" });
            res.end();
        }
    });
});
module.exports = routes;
