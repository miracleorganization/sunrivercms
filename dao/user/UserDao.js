/**
 * Created by wangyouzhi on 2016/12/30.
 */
var UserMapper = require('../../dbMapper/user/UserMapper');
var CommonJson = require('../CommonJson');
var ResultConstant = require('../../constant/ResultConstant');

module.exports = {
    /**
     * 增加用户
     * @param UserBoRequest
     * @param callback
     */
    insert: function (UserBoRequest, callback) {
        var jsonResult = new CommonJson();
        var UserPoRequest = UserBoRequest;

        UserMapper.User.create(UserPoRequest, function (err, UserPoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                var UserBoResult = UserPoResult;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = UserBoResult;
            }

            // 测试 find 操作是异步操作，所以需要把 callback 函数放在内部回调
            callback(jsonResult);
        });
    },
    /**
     * 通过 username 删除用户
     * @param UserBoRequest
     * @param callback
     */
    deleteByUsername: function (UserBoRequest, callback) {
        var jsonResult = new CommonJson();
        var UserPoRequest = UserBoRequest;
        UserMapper.User.find(UserPoRequest, function (err, UserPoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                var UserBoResult = UserPoResult;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = UserBoResult;
            }
            callback(jsonResult);
        });
    },
    /**
     * 更新用户
     * @param UserBoRequest
     * @param callback
     */
    update: function (UserBoRequest, callback) {
        var jsonResult = new CommonJson();
        var UserPoRequest = UserBoRequest;
        UserMapper.User.find(UserPoRequest, function (err, UserPoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                var UserBoResult = UserPoResult;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = UserBoResult;
            }
            callback(jsonResult);
        });
    },
    /**
     * 查询 username 是否存在
     * @param UserBoRequest
     * @param callback
     */
    queryUser: function (UserBoRequest, callback) {
        var jsonResult = new CommonJson();
        var UserPoRequest = UserBoRequest;

        UserMapper.User.find(UserPoRequest, function (err, UserPoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                var UserBoResult = UserPoResult;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = UserBoResult;
            }
            callback(jsonResult);
        });
    }
};
