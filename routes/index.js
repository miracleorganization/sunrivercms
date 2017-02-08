var express = require('express');
var router = express.Router();
var LoginFilter = require('../filter/LoginFilter');

router.get('/back-index', function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var jsonResult = {};
            jsonResult.username = req.session.username;
            jsonResult.loggin = req.session.username;
            res.render("back-index", jsonResult);
        } else {
            res.redirect("/user/login");
        }
    });
});

module.exports = router;
