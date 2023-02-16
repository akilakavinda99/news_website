function serverTestController(req, res) {
  res.status(200).send("Server is working -- AM--AFTER WORKFLOW");
}

module.exports = {
  serverTestController,
};
