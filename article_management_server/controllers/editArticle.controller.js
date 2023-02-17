const Article = require("../models/Article");
const isBase64 = require("is-base64");
const { imageUpload } = require("../utils/imageUpload");

async function editArticleController(req, res) {
  const articleId = req.params.id;
  var isImageEdited = false;
  const { articleTitle, articleImage, articleBody } = req.body;

  // checking if the user has uploaded a image again
  if (isBase64(articleImage, { mimeRequired: true })) {
    isImageEdited = true;
    var uploadedImage = await imageUpload(articleImage);
    var editedArticleWithImage = {
      articleTitle,
      articleImage: uploadedImage,
      articleBody,
    };
  } else {
    var editedArticleWithoutImage = {
      articleTitle,
      articleImage,
      articleBody,
    };
  }
  console.log(isImageEdited);
  await Article.findByIdAndUpdate(
    articleId,
    isImageEdited ? editedArticleWithImage : editedArticleWithoutImage
  )
    .then(() => {
      return res.status(200).send({
        message: "Article edited",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        error: "Error updating article",
      });
    });
}

module.exports = {
  editArticleController,
};
