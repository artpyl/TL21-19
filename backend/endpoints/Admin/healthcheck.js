const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function healthcheck (req,res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "freedomepass",
        multipleStatements: true
    });

    con.connect(function(err){
        if (err || con.state === 'disconnected')  {
          return res.send(JSON.stringify({"status":"failed","dbconnection":"Server=localhost;Database=freedomepass;Uid=root;Pwd=password;" }));
        }
        console.log("connected");
        res.send(JSON.stringify({"status":"OK","dbconnection":"Server=localhost;Database=freedomepass;Uid=root;Pwd=password;"  }));

        con.end(function(err) {
            if (err) {
            return console.log('error:' + err.message);
            }
            console.log('Close the database connection.');
        });
    });
}
router.get('/admin/healthcheck', healthcheck);
module.exports = router;
