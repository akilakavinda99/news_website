const jwt = require("jsonwebtoken");

function createAccessToken(payload) {
  return jwt.sign(payload, process.env.AUTH_JWT_SECRET);
}

module.exports = {
  createAccessToken,
};
