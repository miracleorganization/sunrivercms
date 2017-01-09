/**
 * Created by wangyouzhi on 2017/1/9.
 */
var express = require('express');
var router = express.Router();
var BrandService = require('../../service/brand/BrandService');
var ResultConstant = require('../../constant/ResultConstant');
var LoginFilter = require('../../filter/LoginFilter');

/**
 * 获取品牌列表
 */
router.get('/brand', function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var BrandBoRequest = new Object();

            BrandService.queryAll(BrandBoRequest, function (jsonResult) {
                if (jsonResult.code == ResultConstant.CODE.SUCCESS) {
                    jsonResult.username = req.session.username;
                    res.render('brand-list', jsonResult);
                }
            })
        } else {
            res.redirect('/user/login');
        }
    })
});

/**
 * 新建品牌
 */
router.post('/brand-new', function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var request = req.body;
            var BrandBoRequest = new Object();
            BrandBoRequest.brand_name = request.brandName;
            BrandBoRequest.brand_sign = request.brandSign;

            BrandService.insert(BrandBoRequest, function (jsonResult) {
                if (jsonResult.code == ResultConstant.CODE.SUCCESS) {
                    res.json(jsonResult);
                }
            })
        } else {
            res.redirect('/user/login');
        }
    })
});

module.exports = router;