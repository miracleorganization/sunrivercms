/**
 * Created by wangyouzhi on 2016/12/30.
 */
var UserMapper = require('../../user/UserMapper');

var User = {username: 'e002', password: '002', level: 1};
var User2 = {};

UserMapper.user.create(User, function (err, instance) {
    if (err) throw err;

    console.log("id: " + instance.id);
    console.log("username: " + instance.username);
    console.log("password: " + instance.password);
});

// UserMapper.login.find(User, function (err, res) {
//     if (err) throw err;
//
//     res.forEach(function (item) {
//         console.log(item.id);
//         console.log(item.username);
//         console.log(item.password);
//     })
// });