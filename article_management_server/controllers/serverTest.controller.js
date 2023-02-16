function serverTestController(req, res) {
  res.status(200).send("Server is working -- AM");
}

module.exports = {
  serverTestController,
};
