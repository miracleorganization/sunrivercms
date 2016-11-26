var dbConnection = require("./../dbConnection");
var brandListSql = require("../../sqlexp/manage/brandListSql");
var BaseJson = require("../../data/baseJson");
var jc = require("../../data/jsonConst");

module.exports = {
    /**
     * 查询全部
     * @param callback
     */
    queryAll: function (callback) {
        var con = dbConnection.connectServer();
        con.query(brandListSql.queryAll, function (err, result) {
            var json = new BaseJson();
            if (result) {
                json.code = jc.SUCCESS;
                json.msg = jc.MSG_SUCCESS;
                json.data = result;
            } else {
                json.code = jc.ERROR;
                json.msg = jc.MSG_ERROR;
            }
            callback(json);
        });
    },

    /**
     * 插入品牌
     * @param params
     * @param callback
     */
    insert: function (params, callback) {
        var con = dbConnection.connectServer();
        con.query(brandListSql.insert, [params.brandName, params.brandSign], function (err, result) {
            var json = new BaseJson();
            if (result) {
                json.code = jc.SUCCESS;
                json.msg = jc.MSG_SUCCESS;
                json.data = result;
                console.log(json);
            } else {
                json.code = jc.ERROR;
                json.msg = jc.MSG_ERROR;
            }
            callback(json);
        });

    }
};
