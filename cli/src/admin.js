const chalk = require('chalk');
const fastcsv = require('fast-csv');
const fs = require('fs');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "art",
    password: "password",
    database: "freedomepass",
    multipleStatements: true
});

module.exports = function(object) {
    let isReady = true;

    if (object.source == undefined || object.passesupd == undefined){
        isReady = false;
        console.log(chalk.red('Missing parameters for this scope'));
        console.log(chalk.green('Needed Parameters:'));
        console.log(chalk.green('--passesupd  && --source              ex: Filename'));
    }
    if(isReady){
      const myArgs = process.argv.slice(2);
      let stream = fs.createReadStream(myArgs[3]);
      let csvData = [];
      let csvStream = fastcsv
        .parse()
        .on("data", function(data) {
          csvData.push(data);
        })
        .on("end", function() {
          // remove the first line: header
          csvData.shift();

          // connect to the MySQL database
          // save csvData
          con.connect(err => {
              if (err) console.error(err);
              else {
                let query = "INSERT INTO passes () VALUES?";
                con.query(query, [csvData], (error, response) => {
                  console.log(error || "Success");
                });
                con.end(function(err) {
                    if (err) {
                    return console.log('error:' + err.message);
                    }
                    console.log('Close the database connection.');
                });
              }
           });
          });
          stream.pipe(csvStream);
    }
    else
        console.log(chalk.red('Terminating without sending GET request'));
};
