const express = require("express");
const {
  createArticleController,
} = require("../controllers/createArticle.controller");
const app = express();

app.post("/createArticle", createArticleController);

module.exports = app;
