const Article = require("../models/Article");

async function deleteArticleController(req, res) {
  const { userId } = req.body;

  const articleId = req.params.id;

  await Article.findById(articleId)
    .then(async (article) => {
      // Checking if the user who is trying to delete the article is the user who created it.
      if (article.userId == userId) {
        await Article.deleteOne({ _id: articleId })
          .then(() => {
            return res.status(200).send({
              message: "Article Deleted",
            });
          })
          .catch((err) => {
            return res.status(500).send({
              error: "Error deleting article",
            });
          });
      } else {
        return res.status(401).send({
          error: "Unauthorized action",
        });
      }
    })
    .catch((err) => {
      return res.status(404).send({
        error: "Article cannot be found",
      });
    });
}

module.exports = {
  deleteArticleController,
};
