function serverTestController(req, res) {
  res.status(200).send("Server is working -- MN workflow add");
}

module.exports = {
  serverTestController,
};
