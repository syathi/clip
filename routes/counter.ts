const exp4 = require('express');
const routes4 = exp4.Router();
const knex4 = require('../models/Model');

routes4.get('/', (req, res, next) => {
    res.render("counter");
    res.end();
});

routes4.post('/create', (req, res, next) => {
    console.log(req.body);
    let clear: boolean = req.body.isclear == "on" ? true : false;
    knex4("climb_log").insert({
    	user        : req.body.user, 
    	area        : req.body.area,
    	problem_name: req.body.name,
    	grade       : req.body.grade,
    	attempt     : req.body.attempt,
    	isclear     : clear,
    	comments    : req.body.comment
    }).then( () => {
    	res.redirect("/top");
    	res.end();
    	} );
	res.end();
});
module.exports = routes4;