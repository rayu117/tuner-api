//DEPENDENCIES
const express = require("express");
const cors = require("cors");
const songsController = require("./controllers/songsController.js")

//CONFIG
const app = express();

//ROUTE
app.get("/", (req, res) => {
  res.send("Welcome to Tuner API!!");
});

app.use("/songs", songsController)

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});
//EXPORT
module.exports = app;
