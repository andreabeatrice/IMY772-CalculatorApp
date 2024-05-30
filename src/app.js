//Load express module
import express from "express";
const app = express();

//Define request response in root URL (/)
app.get("/", (req, res) => {
  res.send("App running successfully!");
});

//Launch listening server on port 8080
app.listen(4000, () => {
  console.log("App listening on port 4000!");
});

export default app;
