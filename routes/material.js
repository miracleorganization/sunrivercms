/**
 * Created by wangyouzhi on 2016/12/23.
 */

var express = require('express');
var router = express.Router();
var LoginFilter = require('../filter/LoginFilter');
var fs = require('fs');
var util = require('util');
var formidable = require('formidable');

router.get('/material-list', function (req, res) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var jsonResult = {};
            jsonResult.username = req.session.username;
            jsonResult.loggin = req.session.username;
            res.render("material-list", jsonResult);
        } else {
            res.redirect("/user/login");
        }
    });
});

/**
 * 增加材质
 */
router.post('/material-new', function (req, res) {
    jsonResult.username = req.session.username;
    jsonResult.loggin = req.session.username;

    var form = new formidable.IncomingForm();
    //上传文件的保存路径
    form.uploadDir = "/tmp";
    //保存扩展名
    form.keepExtensions = true;
    //上传文件的最大大小
    form.maxFieldsSize = 20 * 1024 * 1024;

    form.parse(req, function (err, fields, files) {
        if (err) {
            console.log(err);
        } else {
            console.log(fields);
            console.log(files);
            // 将图片从临时文件中保存的到静态资源中去，并且重新命名
            fs.rename(files['materialPhoto'].path, 'public/uploadFiles/images/' + files['materialPhoto'].name);
        }
    });
    res.render("material-list", jsonResult);
});

/**
 * 获取图片，保存到 json 返回前端可以用的相对地址
 */
router.get('/test', function (req, res) {
    console.log(1);
    var pic = fs.readFileSync('public/uploadFiles/images/wallet01.jpg', 'binary');
    var data = {'pic': '../uploadFiles/images/wallet01.jpg'};
    res.render('test', data);
});

module.exports = router;