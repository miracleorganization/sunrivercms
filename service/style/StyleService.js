/**
 * @author wangyouzhi
 * @date 2017/1/17
 */

var StyleDao = require("../../dao/style/StyleDao");

module.exports = {
    /**
     * 插入款式
     * @param StyleBoRequest
     * @param callback
     */
    insert: function (StyleBoRequest, callback) {
        StyleDao.insert(StyleBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
    /**
     * 通过 id 删除款式
     * @param StyleBoRequest
     * @param callback
     */
    deleteById: function (StyleBoRequest, callback) {
        StyleDao.deleteById(StyleBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
    /**
     * 通过 id 修改款式
     * @param StyleBoRequest
     * @param callback
     */
    updateById: function (StyleBoRequest, callback) {
        StyleDao.updateById(StyleBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
    /**
     * 查询所有款式
     * @param StyleBoRequest
     * @param callback
     */
    queryAll: function (StyleBoRequest, callback) {
        StyleDao.queryAll(StyleBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    }
};
