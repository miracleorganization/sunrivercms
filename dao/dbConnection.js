var mysql = require("mysql");
var dbConfig = require("../config/dbConfig")

module.exports = {
    connectServer: function() {
        var mysqlCon = mysql.createConnection(dbConfig.mysql);
        return mysqlCon;
    }
}
