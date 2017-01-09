/**
 * Created by wangyouzhi on 2017/1/8.
 */
var BrandDao = require('../../dao/brand/BrandDao');

module.exports = {
    /**
     * 插入品牌
     * @param BrandBoRequest
     * @param callback
     */
    insert: function (BrandBoRequest, callback) {
        BrandDao.insert(BrandBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
    /**
     * 通过 id 删除品牌
     * @param BrandBoRequest
     * @param callback
     */
    deleteById: function (BrandBoRequest, callback) {
        BrandDao.deleteById(BrandBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
    /**
     * 通过 id 更新品牌信息
     * @param BrandBoRequest
     * @param callback
     */
    updateById: function (BrandBoRequest, callback) {
        BrandDao.updateById(BrandBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
    /**
     * 查询所有的品牌
     * @param BrandBoRequest
     * @param callback
     */
    queryAll: function (BrandBoRequest, callback) {
        BrandDao.queryAll(BrandBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    }
};