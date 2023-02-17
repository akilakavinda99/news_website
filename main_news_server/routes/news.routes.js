const express = require("express");
const { newsController } = require("../controllers/news.controller");

const app = express();

app.get("/getNews", newsController);

module.exports = app;
