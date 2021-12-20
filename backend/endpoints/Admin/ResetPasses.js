const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function resetpasses (req,res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "art",
        password: "password",
        database: "freedomepass",
        multipleStatements: true
    });

    con.connect(function(err){
        if (err) throw err;
        console.log("connected");
        let myquery = "DELETE FROM passes"
        con.query(myquery, function (err, result, fields){
            if (err) {
              return res.send({"status" : "failed"});
            }
            res.send({"status" : "OK"});
        });
        con.end(function(err) {
            if (err) {
            return console.log('error:' + err.message);
            }
            console.log('Close the database connection.');
        });
    });
}

router.post('/admin/resetpasses', resetpasses);
module.exports = router;
