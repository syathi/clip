var e = require('express');
var routes = e.Router();
var kne = require('../models/Model');
routes.post('/login', function (req, res, next) {
    kne("user").where({
        user: req.body.user,
        password: req.body.password
    })
        .then(function (dbRes) {
        if (dbRes.length == 1) {
            console.log(res);
            res.redirect("top");
            res.end();
        }
        else {
            res.redirect("/");
            res.end();
        }
    });
});
module.exports = routes;
