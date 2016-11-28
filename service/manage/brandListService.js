/**
 * Created by wangyouzhi on 2016/11/27.
 */

var manageDao = require('../../dao/manage/brandListDao');

module.exports = {
    /**
     * 品牌列表 service
     * @param parames
     * @param callback
     */
    brandList: function (parames, callback) {
        manageDao.queryAll(function (json) {
            callback(json);
        })
    },

    /**
     * 品牌新建 service
     * @param params
     * @param callback
     */
    brandListNew: function (params, callback) {
        manageDao.insert(params, function (json) {
            callback(json);
        })
    },

    /**
     * 品牌删除 service
     * @param params
     * @param callback
     */
    brandListDelete: function (params, callback) {
        manageDao.deleteById(params, function (json) {
            callback(json);
        })
    }

};