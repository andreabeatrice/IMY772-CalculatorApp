//Load express module
//import express from "express"; //IS FOR RUNNING
const express = require("express"); //IS FOR JEST
const app = express();

const Calculator = require("./calculator.mjs").Calculator; //IS FOR JEST
//import { Calculator } from "./calculator.mjs"; //IS FOR RUNNING

app.set("view engine", "ejs");

app.use(express.static("public"));

//Define request response in root URL (/)
app.get("/", (req, res) => {
  //req.query: { hex1: '333', hex2: '333', operation: 'mul' }
  const calculator = new Calculator();
  var errorM = "";
  if (req.query.hex1) {
    if (calculator.checkHexadecimal(req.query.hex1) == false) {
      errorM = "Value #1 is not a hexidecimal value";
    }
  }

  // if (calculator.checkHexadecimal(req.query.hex1) == false) {
  //   errorM = "Value #1 is not a hexidecimal value";
  // }

  res.render("index", {
    errorMessage: errorM,
    answer: "",
  });
});

//Launch listening server on port 8080

//IS FOR RUNNING
// export const server = app.listen(4000, () => {
//   console.log("App listening on port 4000!");
// });

//IS FOR JEST
module.exports = {
  app: app.listen(4000, () => {}),
};
