const express = require("express");
const {
  createArticleController,
} = require("../controllers/createArticle.controller");
const { verify } = require("../middleware/jwtVerify");
const app = express();

app.post("/createArticle", verify, createArticleController);

module.exports = app;
