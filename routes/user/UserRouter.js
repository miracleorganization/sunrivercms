var express = require('express');
var router = express.Router();
var UserService = require('../../service/user/UserService');
var ResultConstant = require('../../constant/ResultConstant');

// 登陆页面
router.get('/login', function (req, res) {
    if (req.session.login) {
        res.redirect("/back-index");
    } else {
        res.render('login', {});
    }
});

// 登陆 action
router.post('/login', function (req, res) {
    var request = req.body;
    var username = request.username;
    var password = request.password;

    var UserBoRequest = new Object();
    UserBoRequest.username = username;
    UserBoRequest.password = password;

    UserService.queryUser(UserBoRequest, function (jsonResult) {
        if (jsonResult.code == ResultConstant.CODE.SUCCESS) {
            req.session.username = username;
            req.session.login = true;
            res.render('back-index', jsonResult)
        } else {
            res.render('login', jsonResult)
        }

    });
});


module.exports = router;