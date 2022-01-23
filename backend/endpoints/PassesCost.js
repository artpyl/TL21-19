const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function getData (req,res){
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "freedomepass",
        multipleStatements: true
    });

    con.connect(function(err){
        if (err) throw err;
        console.log("connected");
        let date_from = req.params.date_from.slice(0,4) +'-' + req.params.date_from.slice(4,6) + '-' + req.params.date_from.slice(6,8) + ' 00:00:00';
        let date_to = req.params.date_to.slice(0,4) +'-' + req.params.date_to.slice(4,6) + '-' + req.params.date_to.slice(6,8) + ' 00:00:00';
        let myquery = "SELECT count(passID) as NumberOfPasses, CAST(FORMAT(SUM(charge),2) as FLOAT) as PassesCost FROM passes JOIN stations JOIN vehicles WHERE stationID = stationRef AND  vehicleID = vehicleRef AND tagProvider = " + "'" + req.params.op2_ID + "'"
                     + "AND stationProvider = " + "'" + req.params.op1_ID + "'" + "AND timestamp BETWEEN " + "'" + date_from + "'" + "AND" + "'" + date_to + "'" + "; SELECT REPLACE(CURRENT_TIMESTAMP,'T','') AS RequestTimestamp";
        con.query(myquery, function (err, result, fields){
            if (err) throw err;
            let  json = {op1_ID : req.params.op1_ID , op2_ID : req.params.op2_ID , RequestTimestamp : result[1][0]["RequestTimestamp"] , PeriodFrom : date_from , PeriodTo : date_to, NumberOfPasses : result[0][0]["NumberOfPasses"], PassesCost : result[0][0]["PassesCost"]};

            if (req.query.format == 'json')
              res.send(json);
            else {
              let options = { unwindArrays : true };
              const parser = require('json-2-csv');
              let jsonArr = [json];
              parser.json2csv(jsonArr,function(err,csv) {
                if (err) throw err;
                res.send(csv);
              },options);
            }
          });
        con.end(function(err) {
            if (err) {
            return console.log('error:' + err.message);
            }
            console.log('Close the database connection.');
        });
    });
}
router.get('/PassesCost/:op1_ID/:op2_ID/:date_from/:date_to', getData);
module.exports = router;
