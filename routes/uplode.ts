const exp3 = require('express');
const routes3 = exp3.Router();
const knex3 = require('../models/Model');

routes3.get('/', (req, res, next) => {
    res.render("uplode");
    res.end();
});

routes3.post("/create", (req, res, next) => {
    console.log(req.body);
    //knex3("wall").insert({}).then( () => {} );
});
module.exports = routes3;