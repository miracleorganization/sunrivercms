/**
 * @author wangyouzhi
 * @date 2017/2/8
 */

var MaterialDao = require("../../dao/material/MaterialDao");

module.exports = {
    /**
     * 增加材质
     * @param MaterialBoRequest
     * @param callback
     */
    insert: function (MaterialBoRequest, callback) {
        MaterialDao.insert(MaterialBoRequest, function (jsonResult) {
            callback(jsonResult);
        })
    },
};
