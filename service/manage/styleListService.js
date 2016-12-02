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
    }
};