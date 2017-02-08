/**
 * @author wangyouzhi
 * @date 2017/1/28
 */
var MaterialMapper = require('../../dbMapper/material/MaterialMapper');
var CommonJson = require('../CommonJson');
var ResultConstant = require('../../constant/ResultConstant');

module.exports = {
    /**
     * 增加材质
     * @param MaterialBoRequest
     * @param callback
     */
    insert: function (MaterialBoRequest, callback) {
        var jsonResult = new CommonJson();
        var MaterialPoRequest = MaterialBoRequest;

        MaterialMapper.Brand.create(MaterialPoRequest, function (err, MaterialPoResult) {
            if (err) {
                jsonResult.message = err;
            } else {
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
                jsonResult.data = MaterialPoResult;
            }
            callback(jsonResult);
        })
    },
    /**
     * 通过 id 删除材质
     * @param MaterialBoRequest
     * @param callback
     */
    deleteById: function (MaterialBoRequest, callback) {
        var jsonResult = new CommonJson();
        var MaterialPoRequest = MaterialBoRequest;
        var id = MaterialPoRequest.id;

        MaterialMapper.Brand.find({id: id}).remove(function (err) {
            if (err) {
                jsonResult.message = err;
            } else {
                jsonResult.code = ResultConstant.CODE.SUCCESS;
                jsonResult.message = ResultConstant.MESSAGE.DEFAULT_SUCCESS_MESSAGE;
            }
            callback(jsonResult);
        })
    }
};