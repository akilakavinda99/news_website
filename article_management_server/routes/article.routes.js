const express = require("express");
const {
  createArticleController,
} = require("../controllers/createArticle.controller");
const {
  deleteArticleController,
} = require("../controllers/deleteArticle.controller");
const {
  editArticleController,
} = require("../controllers/editArticle.controller");
const { verify } = require("../middleware/jwtVerify");
const app = express();

app.post("/createArticle", createArticleController);
app.delete("/deleteArticle", deleteArticleController);
app.put("/editArticle/:id", editArticleController);

module.exports = app;
