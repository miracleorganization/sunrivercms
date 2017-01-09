/**
 登陆筛选，已经登陆，返回 true 未登陆返回 false
 */
module.exports = function (req, res, callback) {
    if (req.session.login) {
        callback(true);
    } else {
        callback(false);
    }
};
