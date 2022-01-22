const express = require("express");
const port = 9103;
const bodyparser = require('body-parser')
const cors = require('cors');
const app = express()
const baseURL = '/interoperability/api';
app.use(bodyparser.json())
app.use(cors());

const fs = require('fs');
const key = fs.readFileSync('./localhost.decrypted.key');
const cert = fs.readFileSync('./localhost.crt');

var path = require("path");
app.get(baseURL,(req,res) =>{
  res.sendFile(baseURL);
});

const https = require('https');
const server = https.createServer({ key, cert }, app);

server.listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});


/* app.listen(port, () => {
  console.log("hi");
});
*/



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


app.set('views', path.join(__dirname, 'views'));
//app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');
var router = express.Router();
router.get('/PassesAnalysis2/:op1_ID/:op2_ID/:date_from/:date_to', function (req,res) {
  res.render('/PassesAnalysis.ejs');
})
