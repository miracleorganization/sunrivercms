/**
 * Created by wangyouzhi on 2016/12/30.
 */
var orm = require('orm');
var dbConfig = require('./db-config');


module.exports = {
    /**
     * 连接数据库，创建连接池
     */
    connect: orm.connect(dbConfig, function (err, db) {
        if (err) throw err;
        return db;
    })
};