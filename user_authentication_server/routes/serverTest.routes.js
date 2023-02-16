const express = require("express");
const {
  serverTestController,
} = require("../controllers/serverTest.controller");

const app = express();

app.get("/serverTest", serverTestController);

module.exports = app;
