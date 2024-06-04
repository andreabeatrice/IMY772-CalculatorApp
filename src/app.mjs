//Load express module
import express from "express"; //IS FOR RUNNING
//const express = require("express"); //IS FOR JEST
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

//Define request response in root URL (/)
app.get("/", (req, res) => {
  res.render("index");
});

//Launch listening server on port 8080

//IS FOR RUNNING
export const server = app.listen(4000, () => {
  console.log("App listening on port 4000!");
});

//IS FOR JEST
// module.exports = {
//   app: app.listen(4000, () => {}),
// };
