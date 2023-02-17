const Article = require("../models/Article");

async function newsController(req, res) {
  await Article.find()
    .then((articles) => {
      res.status(200).send({
        articles,
      });
    })
    .catch((err) => {
      res.status(404).send({
        error: "Error fetching articles",
      });
    });
}

module.exports = {
  newsController,
};
