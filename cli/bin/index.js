#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');

program.version('0.0.1');

//Functions
const passesperstation = require('../src/passesperstation');
const passesanalysis = require('../src/passesanalysis');
const passescost = require('../src/passescost');
const chargesby = require('../src/chargesby');

/*
//Healthcheck
program
    .command('healthcheck')
    .alias('hc')
    .description('Health Check')
    .option('-f, --format [format]', 'json or csv')
    .action(function(cmdObj) {
        healthcheck(cmdObj);
    });

//Reset passes
program
    .command('resetpasses')
    .alias('rp')
    .description('Reset Passes')
    .option('-f, --format [format]', 'json or csv')
    .action(function(cmdObj) {
        resetpasses(cmdObj);
    });

//ResetStations
program
    .command('resetstations')
    .alias('rs')
    .description('Reset stations')
    .option('-f, --format [format]', 'json or csv')
    .action(function(cmdObj) {
        resetstations(cmdObj);
    });

// ResetVehicles
program
    .command('resetvehicles')
    .alias('rv')
    .description('Reset vehicles')
    .option('-f, --format [format]', 'json or csv')
    .action(function(cmdObj) {
        resetvehicles(cmdObj);
    });
*/

//PassesPerStation
program
    .command('passesperstation')
    .alias('pps')
    .description('Passes per station')
    .option('-s, --station [station]', 'Station name')
    .option('-df, --datefrom [datefrom]', 'YYYYMMDD')
    .option('-dt, --dateto [dateto]', 'YYYYMMDD')
    .option('-f, --format [format]', 'json or csv')
    .action(function(cmdObj){
        passesperstation(cmdObj);
    });

//PassesAnalysis
program
    .command('passesanalysis')
    .alias('pa')
    .description('Passes analysis')
    .option('-o1, --op1 [operator]', 'Operator name')
    .option('-o2, --op2 [operator]', 'Operator name')
    .option('-df, --datefrom [date]', 'YYYYMMDD')
    .option('-dt, --dateto [date]', 'YYYYMMDD')
    .option('-f, --format [format]', 'json or csv')
    .action(function(cmdObj){
        passesanalysis(cmdObj);
    });

//PassesCost
program
    .command('passescost')
    .alias('pc')
    .description('Passes Cost')
    .option('-o1, --op1 [operator]', 'Operator name')
    .option('-o2, --op2 [operator]', 'Operator name')
    .option('-df, --datefrom [date]', 'YYYYMMDD')
    .option('-dt, --dateto [date]', 'YYYYMMDD')
    .option('-f, --format [format]', 'json or csv')
    .action( function(cmdObj) {
        passescost(cmdObj);
    });

//ChargesBy
program
    .command('chargesby')
    .alias('cb')
    .description('Charges by')
    .option('-o1, --op1 [operator]', 'Operator name')
    .option('-df, --datefrom [date]', 'YYYYMMDD')
    .option('-dt, --dateto [date]', 'YYYYMMDD')
    .option('-f, --format [format]', 'json or csv')
    .action(function(cmdObj){
        chargesby(cmdObj);
    });
/*
//Admin
program
    .command('Admin')
    .alias('a')
    .description('Admin')
    .option('-pu, --passesupd --source', 'Update passes')
    .option('-s, --source [filename]', 'Passes from CSV file')
    .option('-f, --format [format]', 'json or csv')
    .action(function(cmdObj){
        Admin(cmdObj);
    });
*/
program.parse(process.argv);
/*
if( process.argv.length < 3 ){
    console.log(chalk.red('Error! Mandatory parameters not detected'));
    console.log(chalk.green('Choose a scope from:'));
    console.log(chalk.green('ActualTotalLoad             |atl'));
    console.log(chalk.green('AggregatedGenerationPerType |agpt'));
    console.log(chalk.green('DayAheadTotalLoadForecast   |datlf'));
    console.log(chalk.green('ActualvsForecast            |avsf'));
    console.log(chalk.green('HealthCheck                 |hc'));
    console.log(chalk.green('Reset                       |r'));
    console.log(chalk.green('Admin                       |ad'));
    console.log(chalk.green('Login                       |li'));
    console.log(chalk.green('Logout                      |lo'));
    console.log(chalk.green('For more info, type "scope" --help'));
}
else if (    process.argv[2] !== 'ActualTotalLoad'
         &&  process.argv[2] !== 'atl'
         &&  process.argv[2] !== 'AggregatedGenerationPerType'
         &&  process.argv[2] !== 'agpt'
         &&  process.argv[2] !== 'DayAheadTotalLoadForecast'
         &&  process.argv[2] !== 'datlf'
         &&  process.argv[2] !== 'ActualvsForecast'
         &&  process.argv[2] !== 'avsf'
         &&  process.argv[2] !== 'Admin'
         &&  process.argv[2] !== 'ad'
         &&  process.argv[2] !== 'HealthCheck'
         &&  process.argv[2] !== 'hc'
         &&  process.argv[2] !== 'Reset'
         &&  process.argv[2] !== 'r'
         &&  process.argv[2] !== 'Login'
         &&  process.argv[2] !== 'li'
         &&  process.argv[2] !== 'Logout'
         &&  process.argv[2] !== 'lo'
){
    console.log(chalk.red('Error! Command not supported'));
    console.log(chalk.green('For more info, type --help'));
}*/
