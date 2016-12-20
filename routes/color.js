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
router.get('/color-list', function (req, res, next) {
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

/**
 * 添加颜色
 */
router.get('/color-new', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.query;
            colorListService.insert(params, function (jsonResult) {
                jsonResult.username = req.session.username;
                jsonResult.login = req.session.login;
                res.redirect('color-list');
            })
        }
        else {
            res.render('login');
        }
    })
});

/**
 * 删除颜色
 */
router.post('/color-delete', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.body;
            colorListService.deleteById(params, function (jsonResult) {
                jsonResult.username = req.session.username;
                jsonResult.login = req.session.login;
                res.json(jsonResult);
            })
        }
        else {
            res.render('login');
        }
    })
});

module.exports = router;