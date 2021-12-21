const express = require('express');
const router = express.Router();
var mysql = require('mysql');

function getData2 (req,res){
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
            if (req.params.op1_ID != req.params.op2_ID){
              var myquery2 = "SELECT ROW_NUMBER() OVER (ORDER BY stationID, timestamp) as PassIndex, passID as PassID, stationRef as StationID, timestamp as TimeStamp, vehicleRef as VehicleID, charge as Charge FROM passes, vehicles, stations WHERE stations.stationProvider= " + "'" + req.params.op1_ID + "'"
                          + "AND vehicles.tagProvider= " + "'" + req.params.op2_ID + "'"
                          + "AND passes.stationRef = stations.stationID AND passes.vehicleRef = vehicles.vehicleID AND timestamp BETWEEN " + "'" + date_from + "'" + "AND" + "'" + date_to + "'" + "ORDER BY stationID, timestamp; SELECT FOUND_ROWS() as NumberOfPasses; SELECT CURRENT_TIMESTAMP as RequestTimestamp;";
            }
            else res.send("PassType is : Home");
            con.query(myquery2, function (err, result, fields){
                if (err) throw err;
                let  json = {op1_ID : req.params.op1_ID , op2_ID : req.params.op2_ID , RequestTimestamp : result[2] , PeriodFrom : date_from , PeriodTo : date_to, NumberOfPasses : result[1], PassesList : result[0]};
                if (req.query.format == 'json')
                  res.send(json);
                else {
                  const parser = require('json-2-csv');
                  let jsonArr = [json];
                  parser.json2csv(jsonArr,function(err,csv) {
                    if (err) throw err;
                    res.send(csv);
                  });
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
    router.get('/PassesAnalysis/:op1_ID/:op2_ID/:date_from/:date_to', getData2);
    module.exports = router;
