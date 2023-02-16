const User = require("../models/UserSignup");
const { createAccessToken } = require("../utils/createAccessToken");

async function userLoginController(req, res) {
  const { email, password } = req.body;

  // find the user from the email which is unique for every user
  await User.find({ email: email })
    .then((user) => {
      if (user[0].password == password) {
        const accessToken = createAccessToken({ userId: user[0]._id });
        res.status(200).send(accessToken);
      } else {
        res.status(403).send("Incorrect Password");
      }
    })
    .catch((err) => res.status(404).send(err));
}

module.exports = {
  userLoginController,
};
