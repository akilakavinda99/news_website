const express = require("express");
const { userLoginController } = require("../controllers/login.controller");
const { userSignupController } = require("../controllers/signup.controller");
const app = express();

app.post("/userSignup", userSignupController);
app.post("/userLogin", userLoginController);

module.exports = app;
