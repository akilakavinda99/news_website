const User = require("../models/UserSignup");

function userSignupController(req, res) {
  // accessing the data through the body
  const { firstName, lastName, password, email, userName } = req.body;

  // creating new object
  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
    userName,
  });
  newUser.save((error, user) => {
    // mongodb error code 11000 refers to unique value overwrite error.
    if (error && error.code === 11000) {
      return res.status(400).send({
        error: "Email already exists.",
      });
    }

    if (error) {
      return res.status(500).send({
        error: "Error saving user to database.",
      });
    }

    res.send(user);
  });
}

module.exports = {
  userSignupController,
};
