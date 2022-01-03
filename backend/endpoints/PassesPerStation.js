const express = require('express');
const router = express.Router();
var mysql = require('mysql');

const app = express();

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
        let myquery1 = "SET @rownum := 0";
        con.query(myquery1, function (err, result, fields){
            if (err) throw err;
        });
        let date_from = req.params.date_from.slice(0,4) +'-' + req.params.date_from.slice(4,6) + '-' + req.params.date_from.slice(6,8) + ' 00:00:00';
        let date_to = req.params.date_to.slice(0,4) +'-' + req.params.date_to.slice(4,6) + '-' + req.params.date_to.slice(6,8) + ' 00:00:00';
        let myquery = "SELECT (@rownum := @rownum + 1) as PassIndex , passID as PassID, timestamp as PassTimeStamp, vehicleRef as VehicleID, tagProvider as TagProvider, passtype as PassType, charge as PassCharge FROM passes JOIN vehicles WHERE stationRef= " + "'" + req.params.stationID + "'"
                     + "AND vehicleID = vehicleRef AND timestamp BETWEEN " + "'" + date_from + "'" + "AND" + "'" + date_to + "'" +
                     "ORDER BY timestamp; SELECT CURRENT_TIMESTAMP AS RequestTimestamp; SELECT stationProvider as StationOperator FROM stations WHERE stationID =" + "'" + req.params.stationID + "'" +
                     "; SELECT @rownum AS NumberOfPasses;"
        con.query(myquery, function (err, result, fields){
            if (err) throw err;
            let  json = {StationID : req.params.stationID , StationOperator : result[2] , PeriodFrom : date_from , PeriodTo : date_to, NumberOfPasses : result[1], PassesList : result[0]};

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
router.get('/PassesPerStation/:stationID/:date_from/:date_to', getData);
module.exports = router;
