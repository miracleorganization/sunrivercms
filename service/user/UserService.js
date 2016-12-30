/**
 * Created by wangyouzhi on 2016/12/30.
 */
var UserDao = require('../../dao/user/UserDao');
var ResultConstant = require('../../constant/ResultConstant');

module.exports = {
    /**
     * 添加用户
     * @param UserBoRequest
     * @param callback
     */
    insert: function (UserBoRequest, callback) {
        UserDao.insert(UserBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
    /**
     * 查询用户是否唯一存在
     * @param UserBoRequest
     * @param callback
     */
    queryUser: function (UserBoRequest, callback) {
        UserDao.queryUser(UserBoRequest, function (jsonResult) {
            if (jsonResult.data.length == 1) {
                jsonResult.data[0].password = null;
                callback(jsonResult);
            } else {
                jsonResult.code = ResultConstant.CODE.ERROR;
                jsonResult.message = "账号和密码不匹配";
                callback(jsonResult);
            }
        })
    },
    /**
     * 删除用户
     * @param UserBoRequest
     * @param callback
     */
    deleteByUsername: function (UserBoRequest, callback) {
        UserDao.deleteByUsername(UserBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
    /**
     * 更新用户信息
     * @param UserBoRequest
     * @param callback
     */
    update: function (UserBoRequest, callback) {
        UserDao.update(UserBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },

};