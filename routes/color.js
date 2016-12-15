/**
 * Created by wangyouzhi on 2016/12/15.
 */
var express = require("express");
var router = express.Router();
var LoginFilter = require('../filter/login-filter');
var colorListService = require('../service/manage/colorListService');

/**
 * 颜色列表
 */
router.get('/color-list', function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = null;
            colorListService.queryAll(params, function (jsonResult) {
                jsonResult.username = req.session.username;
                jsonResult.login = req.session.login;
                res.render('color-list', jsonResult);
            })
        } else {
            res.render('login');
        }
    })

});

module.exports = router;