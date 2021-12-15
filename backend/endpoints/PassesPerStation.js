const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function getData (req,res){
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
        let myquery1 = "SET @rownum := 0";
        con.query(myquery1, function (err, result, fields){
            if (err) throw err;
        });
        let date_from = req.params.date_from.slice(0,4) +'-' + req.params.date_from.slice(4,6) + '-' + req.params.date_from.slice(6,8) + ' 00:00:00';
        let date_to = req.params.date_to.slice(0,4) +'-' + req.params.date_to.slice(4,6) + '-' + req.params.date_to.slice(6,8) + ' 00:00:00';
        let myquery = "SELECT (@rownum := @rownum + 1) as PassIndex , passID, timestamp, vehicleRef, stationRef, tagProvider, charge, passtype FROM passes JOIN vehicles WHERE stationRef= " + "'" + req.params.stationID + "'"
                     + "AND vehicleID = vehicleRef AND timestamp BETWEEN " + "'" + date_from + "'" + "AND" + "'" + date_to + "'" + "ORDER BY timestamp; SELECT CURRENT_TIMESTAMP; SELECT stationProvider as StationOperator FROM stations WHERE stationID =" + "'" + req.params.stationID + "'" + ";"
        con.query(myquery, function (err, result, fields){
            if (err) throw err;
            res.send(JSON.stringify('{StationID : ' + req.params.stationID + '}') + JSON.stringify(result[2]) + JSON.stringify(result[1]) + JSON.stringify(result[0]));
        });
        con.end(function(err) {
            if (err) {
            return console.log('error:' + err.message);
            }
            console.log('Close the database connection.');
        });
    });
}
router.get('/:stationID/:date_from/:date_to', getData);
module.exports = router;
