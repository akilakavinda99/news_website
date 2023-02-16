// Getting access to the env variables
require("dotenv").config();
// Import required libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import the user routes
const articleRoutes = require("./routes/article.routes");
const testRoutes = require("./routes/serverTest.routes");

const app = express();

// Defining the port for local use and getting any accessible port when the server is hosted.
const PORT = process.env.PORT || 8080;

// Enabling cors to access this server through any request
app.use(cors());

// Since base64 is sent through the requests, using these options to overcome the "request entity too large" error
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

// Enable the middleware to parse JSON data in the requests
app.use(express.json());

app.use("/", articleRoutes);
app.use("/test", testRoutes);

const URL = process.env.AUTH_MONGO_URL;

// mongodb connection
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connection success!");
});

app.listen(PORT, () => {
  console.log(`Authentication server is up and running on port ${PORT}`);
});
