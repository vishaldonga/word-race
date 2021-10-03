// Imported required packages
const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  dotenv = require("dotenv").config();

// MongoDB Databse url
var mongoDatabase = process.env.DATABASE;

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("There is problem while connecting database " + err);
  }
);

// All the express routes
const scoreRoutes = require("../Routes/Score.route");

// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 4000;

// Routes Configuration
app.use("/api/scores", scoreRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Staring our express server
const server = app.listen(port, function () {
  console.log("Server Lisening On Port : " + port);
});
