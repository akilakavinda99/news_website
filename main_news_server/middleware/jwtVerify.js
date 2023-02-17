const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.AUTH_JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).send("Token invalid");
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).send("You are not authenticated");
  }
};

module.exports = {
  verify,
};
