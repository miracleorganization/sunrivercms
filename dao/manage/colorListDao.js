/**
 * Created by wangyouzhi on 2016/12/15.
 */
var dbConnection = require("./../dbConnection");
var colorListSql = require("../../sqlexp/manage/colorListSql");
var BaseJson = require("../../data/baseJson");
var jc = require("../../data/jsonConst");

module.exports = {

    /**
     * 查询所有颜色
     * @param params
     * @param callback
     */
    queryAll: function (params, callback) {
        var con = dbConnection.connectServer();
        con.query(colorListSql.queryAll, function (err, result) {
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
     * 添加颜色
     * @param params
     * @param callback
     */
    insert: function (params, callback) {
        var con = dbConnection.connectServer();
        con.query(colorListSql.insert, [params.colorName, params.colorSign, params.colorCode], function (err, result) {
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
     * 根据 id 更新颜色信息
     * @param params
     * @param callback
     */
    updateById: function (params, callback) {
        var con = dbConnection.connectServer();
        con.query(colorListSql.updateById, [params.colorName, params.colorSign, params.colorCode, params.id], function (err, result) {
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
     * 根据 id 删除颜色信息
     * @param params
     * @param callback
     */
    deleteById: function (params, callback) {
        var con = dbConnection.connectServer();
        con.query(colorListSql.deleteById, [params.id], function (err, result) {
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