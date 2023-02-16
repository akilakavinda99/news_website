// Getting access to the env variables
require("dotenv").config();
// Import required libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import the user routes
const userRoutes = require("./routes/user.routes");

const app = express();

// Defining the port for local use and getting any accessible port when the server is hosted.
const PORT = process.env.PORT || 8070;

// Enabling cors to access this server through any request
app.use(cors());

// Enable the middleware to parse JSON data in the requests
app.use(express.json());

app.use("/", userRoutes);

const URL = process.env.AUTH_MONGO_URL;

// mongodb connection
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  checkMongoConnection(true);
  console.log("Mongodb connection success!");
});

app.listen(PORT, () => {
  console.log(`Authentication server is up and running on port ${PORT}`);
});
