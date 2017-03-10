const e = require('express');
const routes = e.Router();
const kne = require('../models/Model');

routes.post('/login', (req, res, next) => {
    kne("user").where({
    		user    : req.body.user,
    		password: req.body.password
    	})
    .then((dbRes) => {
    	if(dbRes.length == 1){
            console.log(res);
    		res.redirect("top");
    		res.end();
    	} else {
    		res.redirect("/");
    		res.end();
    	}
    });
});

module.exports = routes;