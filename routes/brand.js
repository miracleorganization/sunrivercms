/**
 * Created by wangyouzhi on 2016/12/1.
 */
var express = require("express");
var router = express.Router();
var LoginFilter = require('../filter/login-filter');
var brandlistService = require('../service/manage/brandListService');

// 品牌列表
router.get('/brand-list', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.query;
            brandlistService.brandList(params, function (jsonResult) {
                jsonResult.username = req.session.username;
                jsonResult.login = req.session.login;
                res.render('brand-list', jsonResult);
            });
        } else {
            res.render('login');
        }
    });
});

// 新建品牌 action
router.post('/brand-list-new-action', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.body;
            brandlistService.brandListNew(params, function (jsonResult) {
                res.json(jsonResult);
            })
        } else {
            res.render("login");
        }
    })
});

// 删除品牌 action
router.post('/brand-list-delete-action', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.body;
            brandlistService.brandListDelete(params, function (jsonResult) {
                res.json(jsonResult);
            });
        } else {
            res.render('login');
        }
    });
});

// 修改品牌 action
router.post('/brand-list-update-action', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.body;
            brandlistService.brandListUpdate(params, function (jsonResult) {
                res.json(jsonResult);
            })
        } else {
            res.render('login');
        }
    })
});

module.exports = router;