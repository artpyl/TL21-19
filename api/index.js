const express = require("express");
const port = 9103;
const bodyparser = require('body-parser')
const app = express()
const baseURL = '/interoperability/api';
app.use(bodyparser.json()) //for app.post & fetch body as json
app.listen(port, '192.168.2.7', () => {
  console.log("hi");
});

app.get(baseURL,(req,res) =>{
  res.send("hello")
});
const PassesPerStation = require("./endpoints/PassesPerStation.js")
app.use(baseURL, PassesPerStation);
//app.use(baseURL, PassesAnalysis);
//app.use(baseURL, PassesCost);
//app.use(baseURL, ChargesBy);
