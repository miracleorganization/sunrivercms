/**
 * Created by wangyouzhi on 2016/12/1.
 */
var express = require("express");
var router = express.Router();
var LoginFilter = require('../filter/LoginFilter');
var styleListService = require('../service/manage/styleListService');

// wallet-new 添加钱包页面
router.get("/wallet-new", function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var jsonResult = {};
            jsonResult.username = req.session.username;
            res.render('wallet-new', jsonResult);
        } else {
            res.render('login', {});
        }
    });
});

// 增加钱包 action
router.post('/wallet-new-action', function (req, res, next) {
    var form = new multiparty.Form();
    form.uploadDir = '../public/images';

    // fields 封装的是 input 其他类型的 name 对象， files 封装的是 input 为 file 类型的对象
    form.parse(req, function (err, fields, files) {
        console.log(fields);
        console.log(files);
        /*
         输出结果
         fields:
         { name: [ 'lv 秋季新款' ],
         type: [ '长款钱夹' ],
         material: [ '皮革' ],
         color: [ '棕色' ],
         price: [ '2000' ] }

         files:
         { file:
         [ { fieldName: 'file',
         originalFilename: 'wallet02.jpg',
         path: '../public/images/V7HgJloQzRdhZxA_y5uTRLNy.jpg',
         headers: [Object],
         size: 4207 } ] }

         headers:
         { 'content-disposition': 'form-constant; name="fileName"; filename="wallte01.jpg"','content-type': 'image/jpeg' }
         */

        var oldPath = files.file[0].path;
        var newPath = "../public/images/" + files.file[0].originalFilename;

        /*
         fs.rename(oldPath, newPath[, callback]);
         */
        fs.rename(oldPath, newPath, function (err) {
            if (err) {
                console.log("修改文件名错误");
            } else {
                console.log("修改文件名成功");
            }
        });
    });

});

// 款式列表
router.get('/style-list', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.query;
            styleListService.styleList(params, function (jsonResult) {
                jsonResult.username = req.session.username;
                jsonResult.login = req.session.login;
                res.render('style-list', jsonResult);
            });
        } else {
            res.render('login');
        }
    });
});

// 增加款式
router.post('/style-new', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.body;
            styleListService.styleNew(params, function (jsonResult) {
                res.json(jsonResult);
            })
        } else {
            res.render('login');
        }
    });
});

// 编辑款式
router.post('/style-edit', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.body;
            styleListService.styleEditById(params, function (jsonResult) {
                res.json(jsonResult);
            })
        } else {
            res.render('login');
        }
    });
});

// 删除款式
router.post('/style-delete', function (req, res, next) {
    LoginFilter(req, res, function (status) {
        if (status) {
            var params = req.body;
            styleListService.styleDeleteById(params, function (jsonResult) {
                res.json(jsonResult);
            })
        } else {
            res.render('login');
        }
    });
});

module.exports = router;