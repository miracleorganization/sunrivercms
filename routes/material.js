/**
 * Created by wangyouzhi on 2016/12/23.
 */

var express = require('express');
var router = express.Router();
var LoginFilter = require('../filter/LoginFilter');

router.get('/material-list', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var jsonResult = {};
            jsonResult.username = req.session.username;
            jsonResult.loggin = req.session.username;
            res.render("back-index", jsonResult);
        } else {
            res.render("login");
        }
    });
});

module.exports = router;
