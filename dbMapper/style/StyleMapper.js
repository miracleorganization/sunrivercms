/**
 * Created by wangyouzhi on 2017/1/12.
 */
var ormConnection = require("../../db/ormConnection");
var db = ormConnection.connect;

module.exports = {
    /**
     * style mapper
     */
    Style: db.define('style', {
        id: Number,
        style_name: String,
        style_sign: String
    })
};