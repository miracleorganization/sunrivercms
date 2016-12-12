/**
 * Created by wangyouzhi on 2016/11/30.
 */
var dbConnection = require("./../dbConnection");
var styleListSql = require("../../sqlexp/manage/styleListSql");
var BaseJson = require("../../data/baseJson");
var jc = require("../../data/jsonConst");

module.exports = {

    /**
     * 查询全部
     * @param callback
     */
    queryAll: function (callback) {
        var con = dbConnection.connectServer();
        con.query(styleListSql.queryAll, function (err, result) {
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
        })
    },

    /**
     * 通过 id 更新款式
     * @param params
     * @param callback
     */
    updataById: function (params, callback) {
        var con = dbConnection.connectServer();
        con.query(styleListSql.updateById, [params.styleName, params.styleSign, params.id], function (err, result) {
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
        })
    },

    /**
     * 插入款式
     * @param params
     * @param callback
     */
    insert: function (params, callback) {
        var con = dbConnection.connectServer();
        con.query(styleListSql.insert, [params.styleName, params.styleSign], function (err, result) {
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
        })
    },

    /**
     * 通过 id 删除
     * @param params
     * @param callback
     */
    deleteById: function (params, callback) {
        var con = dbConnection.connectServer();
        con.query(styleListSql.deleteById, [params.id], function (err, result) {
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
        })
    }
};