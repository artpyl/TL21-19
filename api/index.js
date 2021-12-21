const express = require("express");
const port = 9103;
const bodyparser = require('body-parser')
const app = express()
const baseURL = '/interoperability/api';
app.use(bodyparser.json())
app.listen(port, () => {
  console.log("hi");
});

var path = require("path");
app.get(baseURL,(req,res) =>{
  res.sendFile(path.join(__dirname, '..', '/frontend/', 'index.html'));
});

const PassesPerStation = require("../backend/endpoints/PassesPerStation.js");
const PassesAnalysis = require("../backend/endpoints/PassesAnalysis.js");
const PassesCost = require("../backend/endpoints/PassesCost.js");
const ChargesBy = require("../backend/endpoints/ChargesBy.js");
const Healthcheck = require("../backend/endpoints/Admin/healthcheck.js");
const ResetPasses = require("../backend/endpoints/Admin/ResetPasses.js");
const ResetStations = require("../backend/endpoints/Admin/ResetStations.js");
const ResetVehicles = require("../backend/endpoints/Admin/ResetVehicles.js");

app.use(baseURL, PassesPerStation);
app.use(baseURL, PassesAnalysis);
app.use(baseURL, PassesCost);
app.use(baseURL, ChargesBy);
app.use(baseURL, Healthcheck);
app.use(baseURL, ResetPasses);
app.use(baseURL, ResetStations);
app.use(baseURL, ResetVehicles);
