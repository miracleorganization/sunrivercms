var express = require('express');
var router = express.Router();
var LoginFilter = require('../filter/login-filter');

router.get('/back-index', function (req, res, next) {
    LoginFilter(req, res, function () {
        if (req.session.login == true) {
            var username = req.session.username;
            res.render("back-index", {username: username});
        } else {
            res.render("login");
        }
    });
});

module.exports = router;
