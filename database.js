
var mysql = require('mysql');

exports.connect = function(conData,callback){
    var con = mysql.createConnection({
        host: conData.host,
        user: conData.user,
        password: conData.password,
        database: conData.database
    });

    con.connect((err) => {
        if (err) callback(err);
        callback(null, con);
    });
}


exports.createTables = (conData, callback) => {

    var con = mysql.createConnection({
        host: conData.host,
        user: conData.user,
        password: conData.password,
        database: conData.database
    
});
    console.log("Creating table")
    var sql = "CREATE TABLE Messages (formName VARCHAR(255), formEmail VARCHAR(32), formMessage VARCHAR(4096));";
    con.query(sql, (err, result) => {
        console.log("finish query:" + result);
        callback(err, result);
    });
};