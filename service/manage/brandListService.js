/**
 * Created by wangyouzhi on 2016/11/27.
 */

var brandListDao = require('../../dao/manage/brandListDao');

module.exports = {
    /**
     * 品牌列表 service
     * @param parames
     * @param callback
     */
    brandList: function (parames, callback) {
        brandListDao.queryAll(function (json) {
            callback(json);
        })
    },

    /**
     * 品牌新建 service
     * @param params
     * @param callback
     */
    brandListNew: function (params, callback) {
        brandListDao.insert(params, function (json) {
            callback(json);
        })
    },

    /**
     * 品牌删除 service
     * @param params
     * @param callback
     */
    brandListDelete: function (params, callback) {
        brandListDao.deleteById(params, function (json) {
            callback(json);
        })
    },

    /**
     * 品牌编辑 service
     * @param params
     * @param callback
     */
    brandListUpdate: function (params, callback) {
        brandListDao.updateById(params, function (json) {
            callback(json);
        })
    }
};