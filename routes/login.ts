const e = require('express');
const routes = e.Router();
const kne = require('../models/Model');

routes.get('/', (req, res, next) => {
	if(req.session.id){
		res.redirect('top');
	} else {
		res.render('login');
	}
});

routes.post('/login', (req, res, next) => {
    kne("user").where({
    		user    : req.body.user,
    		password: req.body.password
    	})
    .then((dbRes) => {
    	if(dbRes.length == 1){
            console.log(res);
    		res.redirect("top", {message: "successed login"});
    		res.end();
    	} else {
    		res.redirect("/", {message: "failed to login"});
    		res.end();
    	}
    });
});

module.exports = routes;