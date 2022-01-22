#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk');

program.version('0.0.1');

//Functions
const passesperstation = require('../src/passesperstation.js');
const passesanalysis = require('../src/passesanalysis.js');
const passescost = require('../src/passescost.js');
const chargesby = require('../src/chargesby.js');
const healthcheck = require('../src/healthcheck.js');
const resetpasses = require('../src/resetpasses.js');
const resetstations = require('../src/resetstations.js');
const resetvehicles = require('../src/resetvehicles.js');
const admin = require('../src/admin.js');


//Healthcheck
program
    .command('healthcheck')
    .alias('hc')
    .description('Health Check')
    .action(function(cmdObj) {
        healthcheck(cmdObj);
    });

//Reset passes
program
    .command('resetpasses')
    .alias('rp')
    .description('Reset Passes')
    .action(function(cmdObj) {
        resetpasses(cmdObj);
    });

//ResetStations
program
    .command('resetstations')
    .alias('rs')
    .description('Reset stations')
    .action(function(cmdObj) {
        resetstations(cmdObj);
    });

// ResetVehicles
program
    .command('resetvehicles')
    .alias('rv')
    .description('Reset vehicles')
    .action(function(cmdObj) {
        resetvehicles(cmdObj);
    });


//PassesPerStation
program
    .command('passesperstation')
    .alias('pps')
    .description('Passes per station')
    .option('-s, --station [station]', 'Station name')
    .option('-f, --datefrom [datefrom]', 'YYYYMMDD')
    .option('-t, --dateto [dateto]', 'YYYYMMDD')
    .option('-F, --format [format]', 'json or csv')
    .action(function(cmdObj){
        passesperstation(cmdObj);
    });

//PassesAnalysis
program
    .command('passesanalysis')
    .alias('pa')
    .description('Passes analysis')
    .option('-1, --op1 [operator]', 'Operator name')
    .option('-2, --op2 [operator]', 'Operator name')
    .option('-f, --datefrom [date]', 'YYYYMMDD')
    .option('-t, --dateto [date]', 'YYYYMMDD')
    .option('-F, --format [format]', 'json or csv')
    .action(function(cmdObj){
        passesanalysis(cmdObj);
    });

//PassesCost
program
    .command('passescost')
    .alias('pc')
    .description('Passes Cost')
    .option('-1, --op1 [operator]', 'Operator name')
    .option('-2, --op2 [operator]', 'Operator name')
    .option('-f, --datefrom [date]', 'YYYYMMDD')
    .option('-t, --dateto [date]', 'YYYYMMDD')
    .option('-F, --format [format]', 'json or csv')
    .action( function(cmdObj) {
        passescost(cmdObj);
    });

//ChargesBy
program
    .command('chargesby')
    .alias('cb')
    .description('Charges by')
    .option('-1, --op1 [operator]', 'Operator name')
    .option('-f, --datefrom [date]', 'YYYYMMDD')
    .option('-t, --dateto [date]', 'YYYYMMDD')
    .option('-F, --format [format]', 'json or csv')
    .action(function(cmdObj){
        chargesby(cmdObj);
    });

//Admin
program
    .command('Admin')
    .alias('a')
    .description('Admin')
    .option('-p, --passesupd', 'Update passes')
    .option('-s, --source [filename]', 'Passes from CSV file')
    .action(function(cmdObj){
        admin(cmdObj);
    });

program.parse(process.argv);

if( process.argv.length < 3 ){
    console.log(chalk.red('Error! Mandatory parameters not detected'));
    console.log(chalk.green('Choose a scope from:'));
    console.log(chalk.green('healthcheck      |hc'));
    console.log(chalk.green('resetpasses      |rp'));
    console.log(chalk.green('resetstations    |rs'));
    console.log(chalk.green('resetvehicles    |rv'));
    console.log(chalk.green('passesperstation |pps'));
    console.log(chalk.green('passesanalysis   |pa'));
    console.log(chalk.green('passescost       |pc'));
    console.log(chalk.green('chargesby        |cb'));
    console.log(chalk.green('Admin            |a'));
    console.log(chalk.green('For more info, type "scope" --help'));
}
else if (    process.argv[2] !== 'healthcheck'
         &&  process.argv[2] !== 'hc'
         &&  process.argv[2] !== 'resetpasses'
         &&  process.argv[2] !== 'rp'
         &&  process.argv[2] !== 'resetstations'
         &&  process.argv[2] !== 'rs'
         &&  process.argv[2] !== 'resetvehicles'
         &&  process.argv[2] !== 'rv'
         &&  process.argv[2] !== 'passesperstation'
         &&  process.argv[2] !== 'pps'
         &&  process.argv[2] !== 'passesanalysis'
         &&  process.argv[2] !== 'pa'
         &&  process.argv[2] !== 'passescost'
         &&  process.argv[2] !== 'pc'
         &&  process.argv[2] !== 'chargesby'
         &&  process.argv[2] !== 'cb'
         &&  process.argv[2] !== 'Admin'
         &&  process.argv[2] !== 'a'
){
    console.log(chalk.red('Error! Command not supported'));
    console.log(chalk.green('For more info, type --help'));
}
