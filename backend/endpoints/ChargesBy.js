const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function getData4 (req,res){
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
            let date_from = req.params.date_from.slice(0,4) +'-' + req.params.date_from.slice(4,6) + '-' + req.params.date_from.slice(6,8) + ' 00:00:00';
            let date_to = req.params.date_to.slice(0,4) +'-' + req.params.date_to.slice(4,6) + '-' + req.params.date_to.slice(6,8) + ' 00:00:00';
            let myquery4 = "SELECT tagProvider as VisitingOperator, COUNT(*) as NumberOfPasses, FORMAT(SUM(charge),2) as PassesCost FROM passes, vehicles, stations WHERE stations.stationProvider= " + "'" + req.params.op_ID + "'"
                         + "AND vehicles.tagProvider<> " + "'" + req.params.op_ID + "'"
                         + "AND passes.stationRef = stations.stationID AND passes.vehicleRef = vehicles.vehicleID AND timestamp BETWEEN " + "'" + date_from + "'" + "AND" + "'" + date_to + "'" + "GROUP BY tagProvider; SELECT CURRENT_TIMESTAMP as RequestTimestamp;";
            con.query(myquery4, function (err, result, fields){
                if (err) throw err;
                res.send(JSON.stringify({"op_ID" : req.params.op_ID }) + JSON.stringify(result[1]) + JSON.stringify({"PeriodFrom" : date_from , "PeriodTo" :  date_to}) + JSON.stringify(result[0]));
            });
            con.end(function(err) {
                if (err) {
                return console.log('error:' + err.message);
                }
                console.log('Close the database connection.');
            });
        });
    }
    router.get('/ChargesBy/:op_ID/:date_from/:date_to', getData4);
    module.exports = router;
