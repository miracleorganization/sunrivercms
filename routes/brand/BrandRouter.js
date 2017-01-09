/**
 * Created by wangyouzhi on 2017/1/9.
 */
var express = require('express');
var router = express.Router();
var BrandService = require('../../service/brand/BrandService');
var ResultConstant = require('../../constant/ResultConstant');

router.get('/brand', function (req, res) {
    var BrandBoRequest = {};
    BrandService.queryAll(BrandBoRequest, function (jsonResult) {
        res.render('brand-list', jsonResult);
    })
});

module.exports = router;