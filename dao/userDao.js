var dbConnection = require("./dbConnection");

module.exports = {
    insert: function(username, password, sex, callback){
    	var con = dbConnection.connectServer();
    	con.query('INSERT INTO user(username, password, sex) VALUES(?, ?, ?)',[username, password, sex], function(err, result){
    		if(result){
    			result = {
    				code: "200",
    				msg: "添加成功"
    			}
    		}
    		callback(result); 
    	});
    },
    queryByUsername: function(username, password, callback){
        var con = dbConnection.connectServer();
        con.query("SELECT * FROM user WHERE username=? AND password=?",[username, password], function(err, result){
            if(err){
                return err;
            }
            callback(result);
        });
    }
};
