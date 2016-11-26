/**
 * Created by wangyouzhi on 2016/11/27.
 */

var manageDao = require('../../dao/manage/brandListDao');

module.exports = {
    brandList: function (parames, callback) {
        manageDao.queryAll(function (json) {
            callback(json);
        })
    },
    brandListNew: function (params, callback) {
        manageDao.insert(params, function (json) {
            callback(json);
        })
    }

};