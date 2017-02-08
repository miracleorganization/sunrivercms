/**
 * @author wangyouzhi
 * @date 2017/1/28
 */
var ormConnection = require("../../db/ormConnection");

var db = ormConnection.connect;

module.exports = {
    /**
     * material mapper
     */
    Brand: db.define('material', {
        id: Number,
        material_type: String,
        material_sign: String,
        material_photo: String
    })
};
