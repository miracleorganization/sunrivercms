/**
 * @author wangyouzhi
 * @date 2017/1/17
 */
var express = require('express');
var router = express.Router();
var StyleService = require('../../service/style/StyleService');
var ResultConstant = require('../../constant/ResultConstant');
var LoginFilter = require('../../filter/LoginFilter');

/**
 * 款式列表
 */
router.get("/style-list", function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var StyleBoRequest = new Object();

            StyleService.queryAll(StyleBoRequest, function (jsonResult) {
                if (jsonResult.code == ResultConstant.CODE.SUCCESS) {
                    jsonResult.username = req.session.username;
                    res.render('style-list', jsonResult);
                }
            })
        } else {
            res.redirect("/user/login");
        }
    })
});

/**
 * 增加样式
 */
router.post("/style-add", function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var request = req.body;
            var StyleBoRequest = new Object();
            StyleBoRequest.id = request.id;
            StyleBoRequest.style_name = request.styleName;
            StyleBoRequest.style_sign = request.styleSign;

            StyleService.insert(StyleBoRequest, function (jsonResult) {
                if (jsonResult.code == ResultConstant.CODE.SUCCESS) {
                    res.json(jsonResult);
                }
            })
        } else {
            res.redirect("/user/login");
        }
    })
});

/**
 * 删除样式
 */
router.post("/style-delete", function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var request = req.body;
            var StyleBoRequest = new Object();
            StyleBoRequest.id = request.id;

            StyleService.deleteById(StyleBoRequest, function (jsonResult) {
                if (jsonResult.code == ResultConstant.CODE.SUCCESS) {
                    res.json(jsonResult);
                }
            })
        } else {
            res.redirect("/user/login");
        }
    })
});

/**
 * 删除样式
 */
router.post("/style-edit", function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var request = req.body;
            var StyleBoRequest = new Object();
            StyleBoRequest.id = request.id;
            StyleBoRequest.style_name = request.styleName;
            StyleBoRequest.style_sign = request.styleSign;

            StyleService.updateById(StyleBoRequest, function (jsonResult) {
                if (jsonResult.code == ResultConstant.CODE.SUCCESS) {
                    res.json(jsonResult);
                }
            })
        } else {
            res.redirect("/user/login");
        }
    })
});

module.exports = router;