var express = require('express');
var router = express.Router();
var userDao = require("../dao/userDao");

// 登陆
router.get('/login', function(req, res, next) {
    if(req.session.login){
        res.redirect("/back-index");
    }else{
        res.render('login', {});
    }
});

// 登陆 action
router.post('/login-action', function(req, res, next) {
    var params = req.body;
    var username = params.username;
    var password = params.password;
    userDao.queryByUsername(username, password, function(result) {
        if (result.length == 1 && result[0]) {
            var res_username = result[0].username;
            req.session.login = true;
            req.session.username = res_username;
            res.render('back-index', { username: res_username });
        } else {
            res.render('login', { wrong: '请仔细检查账号和密码' });
        }
    });
});


module.exports = router;