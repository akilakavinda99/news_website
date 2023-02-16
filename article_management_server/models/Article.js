const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createArticleSchema = new Schema({
  articleTitle: {
    type: String,
    required: true,
  },
  articleImage: {
    type: String,
    required: true,
  },
  articleBody: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model("Article", createArticleSchema);
module.exports = Article;
