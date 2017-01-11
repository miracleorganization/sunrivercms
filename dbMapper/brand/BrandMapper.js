/**
 * Created by wangyouzhi on 2016/12/30.
 */
var ormConnection = require("../../db/ormConnection");

var db = ormConnection.connect;

module.exports = {
    /**
     * brand mapper
     */
    Brand: db.define('brand', {
        id: Number,
        brand_name: String,
        brand_sign: String
    })
};
