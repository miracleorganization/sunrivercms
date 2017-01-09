/**
 * Created by wangyouzhi on 2017/1/8.
 */
var BrandDao = require('../../dao/brand/BrandDao');

module.exports = {
    /**
     * 查询所有的品牌
     */
    queryAll: function (BrandBoRequest, callback) {
        BrandDao.queryAll(BrandBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    }
};