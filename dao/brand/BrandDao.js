/**
 * Created by wangyouzhi on 2017/1/2.
 */
var BrandMapper = require('../../dbMapper/brand/BrandMapper');
var CommonJson = require('../CommonJson');
var ResultConstant = require('../../constant/ResultConstant');

module.exports = {
    /**
     * 插入品牌信息
     * @param BrandBoRequest
     * @param callback
     */
    insert: function (BrandBoRequest, callback) {
        var jsonResult = new CommonJson();
        var BrandPoRequest = BrandBoRequest;

        BrandMapper.brand.create(BrandPoRequest, function (err, BrandPoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                var BrandBoResult = BrandPoResult;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = BrandBoResult;
            }
            callback(jsonResult);
        })
    },
    /**
     * 通过 ID 删除品牌信息
     * @param BrandBoRequest
     * @param callback
     */
    deleteById: function (BrandBoRequest, callback) {
        var jsonResult = new CommonJson();
        var BrandPoRequest = BrandBoRequest;

        BrandMapper.brand.find(BrandPoRequest).remove(function (err) {
            if (err) {
                jsonResult.message = err;
            } else {
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = null;
            }
            callback(jsonResult);
        })
    },
    /**
     * 通过 ID 更新品牌信息
     * @param BrandBoRequest
     * @param callback
     */
    updateById: function (BrandBoRequest, callback) {
        var jsonResult = new CommonJson();
        var BrandPoRequest = BrandBoRequest;

        BrandMapper.brand.find({id: BrandPoRequest.id}, function (err, BrandPoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                if (BrandPoResult.length == 1) {
                    for (var item in BrandPoResult[0]) {
                        BrandPoResult[item] = BrandBoRequest[item];
                    }
                    BrandPoResult[0].save(function (err) {
                        if (err) {
                            jsonResult.message = err;
                        } else {
                            jsonResult.code = ResultConstant.CODE.SUCCESS;
                            jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                            jsonResult.data = null;
                        }
                    });
                }
            }
            callback(jsonResult);
        });
    },
    /**
     * 查询所有的品牌
     * @param BrandBoRequest
     * @param callback
     */
    queryAll: function (BrandBoRequest, callback) {
        var jsonResult = new CommonJson();
        var BrandPoRequest = BrandBoRequest;

        BrandMapper.brand.find(BrandPoRequest, function (err, BrandPoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                var BrandBoResult = BrandPoResult;
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = BrandBoResult;
            }
            callback(jsonResult);
        })
    }
};
