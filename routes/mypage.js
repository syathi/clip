var expre = require('express');
var r = expre.Router();
/* GET home page. */
r.get('/', function (req, res, next) {
    res.render("mypage");
    res.end();
});
module.exports = r;
