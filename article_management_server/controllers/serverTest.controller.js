function serverTestController(req, res) {
  res.status(200).send("Server is working //test");
}

module.exports = {
  serverTestController,
};
