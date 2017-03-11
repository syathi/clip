const exp2 = require('express');
const route2 = exp2.Router();

/* GET home page. */
// route2.post('/', (req, res, next) => {
// 	res.render("top");
// 	res.end();
// });

route2.get('/', (req, res, next) => {
	res.render("top");
	res.end();
});
module.exports = route2;
