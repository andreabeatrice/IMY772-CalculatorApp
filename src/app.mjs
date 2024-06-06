//Load express module
import express from "express"; //IS FOR RUNNING
//const express = require("express"); //IS FOR JEST
const app = express();

//const Calculator = require("./calculator.mjs").Calculator; //IS FOR JEST
import { Calculator } from "./calculator.mjs"; //IS FOR RUNNING

app.set("view engine", "ejs");

app.use(express.static("public"));

//Define request response in root URL (/)
app.get("/", (req, res) => {
  //req.query: { hex1: '333', hex2: '333', operation: 'mul' }
  const calculator = new Calculator();
  var responseText = " ";
  if (req.query.hex1 && req.query.hex2 && req.query.operation) {
    if (
      calculator.checkHexadecimal(req.query.hex1) == false &&
      calculator.checkHexadecimal(req.query.hex2)
    ) {
      responseText = "Value #1 is not a hexidecimal value";
    } else if (
      calculator.checkHexadecimal(req.query.hex2) == false &&
      calculator.checkHexadecimal(req.query.hex1)
    ) {
      responseText = "Value #2 is not a hexidecimal value";
    } else if (
      calculator.checkHexadecimal(req.query.hex1) == false &&
      calculator.checkHexadecimal(req.query.hex2) == false
    ) {
      responseText = "Value #1 and Value #2 are not hexidecimal values";
    } else {
      responseText = calculator.go(
        req.query.hex1,
        req.query.hex2,
        req.query.operation,
      );

      if (responseText == null) {
        responseText = "CALCULATION ERROR";
      }
    }
  }

  res.render("index", {
    response: responseText,
  });
});

//IS FOR RUNNING
export const server = app.listen(4000, () => {
  console.log("App listening on port 4000!");
});

//IS FOR JEST
// module.exports = {
//   app: app.listen(4000, () => {}),
// };
