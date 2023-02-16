const Article = require("../models/Article");
const { imageUpload } = require("../utils/imageUpload");

async function createArticleController(req, res) {
  // accessing the data through the body
  const { articleTitle, articleImage, articleBody, userId } = req.body;
  try {
    // uploading the image to cloudinary takes time so using async await
    var articleImageUrl = await imageUpload(articleImage);
  } catch (error) {
    return res.status(500).send({
      error: "Error uploading the image",
    });
  }

  // creating new object
  const newArticle = new Article({
    articleTitle,
    articleImage: articleImageUrl,
    articleBody,
    userId,
  });
  newArticle.save((error, article) => {
    if (error) {
      console.log(error);
      return res.status(500).send({
        error: "Error saving  to database.",
      });
    }

    res.send(article);
  });
}

module.exports = {
  createArticleController,
};
