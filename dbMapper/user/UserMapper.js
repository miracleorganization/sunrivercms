/**
 * Created by wangyouzhi on 2016/12/30.
 */
var ormConnection = require("../../db/ormConnection");

var db = ormConnection.connect;

module.exports = {
    /**
     * login mapper
     */
    user: db.define('user', {
        id: Number,
        username: String,
        password: String,
        level: Number
    })
};