/**
 * @author Youzhi, Wang
 * @date 2017-01-17
 */
var StyleMapper = require('../../dbMapper/style/StyleMapper');
var CommonJson = require('../CommonJson');
var ResultConstant = require('../../constant/ResultConstant');

module.exports = {
    /**
     * 插入款式
     * @param StyleBoRequest
     * @param callback
     */
    insert: function (StyleBoRequest, callback) {
        var jsonResult = new CommonJson();
        var StylePoRequest = StyleBoRequest;

        StyleMapper.Style.create(StylePoRequest, function (err, StylePoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                var StyleBoResult = StylePoResult;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = StyleBoResult;
            }
            callback(jsonResult);
        })
    },
    /**
     * 通过 id 删除款式
     * @param StyleBoRequest
     * @param callback
     */
    deleteById: function (StyleBoRequest, callback) {
        var jsonResult = new CommonJson();
        var StylePoRequest = StyleBoRequest;

        StyleMapper.Style.find({id: StylePoRequest.id}).remove(function (err) {
            if (err) {
                jsonResult.message = err;
            } else {
                var StyleBoResult = StylePoRequest;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = StyleBoResult;
            }
            callback(jsonResult);
        })
    },
    /**
     * 通过 id 更新款式信息
     * @param StyleBoRequest
     * @param callback
     */
    updateById: function (StyleBoRequest, callback) {
        var jsonResult = new CommonJson();
        var StylePoRequest = StyleBoRequest;

        StyleMapper.Style.find({id: StylePoRequest.id}, function (err, StylePoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                if (StylePoResult.length == 1) {
                    for (var item in StylePoResult[0]) {
                        StylePoResult[0][item] = StylePoResult[item];
                    }
                    StylePoResult[0][item].save(function (err) {
                        if (err) {
                            jsonResult.message = err;
                        } else {
                            var StyleBoResult = StylePoRequest;
                            jsonResult.code = ResultConstant.CODE.SUCCESS;
                            jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                            jsonResult.data = StyleBoResult;
                        }
                        callback(jsonResult);
                    })
                }
            }
        })
    },
    /**
     * 查询所有的款式
     * @param StyleBoRequest
     * @param callback
     */
    queryAll: function (StyleBoRequest, callback) {
        var jsonResult = new CommonJson();
        var StylePoRequest = StyleBoRequest;

        StyleMapper.Style.find(StylePoRequest, function (err, StylePoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                var StyleBoResult = StylePoResult;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = StyleBoResult;
            }
            callback(jsonResult);
        })
    }
};