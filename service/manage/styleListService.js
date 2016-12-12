/**
 * Created by wangyouzhi on 2016/12/1.
 */
var styleListDao = require('../../dao/manage/styleListDao');

module.exports = {
    /**
     * 款式列表 service
     * @param params
     * @param callback
     */
    styleList: function (params, callback) {
        styleListDao.queryAll(function (result) {
            callback(result);
        })
    },

    /**
     * 增加款式
     * @param params
     * @param callback
     */
    styleNew: function (params, callback) {
        styleListDao.insert(params, function (result) {
            callback(result);
        })
    },

    /**
     * 修改款式
     * @param params
     * @param callback
     */
    styleEditById: function (params, callback) {
        styleListDao.updataById(params, function (result) {
            callback(result);
        })
    },

    /**
     * 删除款式
     * @param params
     * @param callback
     */
    styleDeleteById: function (params, callback) {
        styleListDao.deleteById(params, function (result) {
            callback(result);
        })
    }
};