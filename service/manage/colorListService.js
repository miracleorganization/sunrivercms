/**
 * Created by wangyouzhi on 2016/12/15.
 */
var colorListDao = require("../../dao/manage/colorListDao");

module.exports = {

    /**
     * 查询所有颜色
     */
    queryAll: function (params, callback) {
        colorListDao.queryAll(params, function (json) {
            callback(json);
        })
    },

    /**
     * 添加颜色
     */
    insert: function (params, callback) {
        colorListDao.insert(params, function (json) {
            callback(json);
        })
    },

    /**
     * 查询所有颜色
     */
    updateById: function (params, callback) {
        colorListDao.updateById(params, function (json) {
            callback(json);
        })
    },

    /**
     * 查询所有颜色
     */
    deleteById: function (params, callback) {
        colorListDao.deleteById(params, function (json) {
            callback(json);
        })
    }
};