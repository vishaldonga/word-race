const express = require("express");
const scoreRoute = express.Router();
let scoreModel = require("../Model/Score");
scoreRoute.route("/").get(function (req, res) {
  scoreModel.find()
  .limit(10)
  .exec(function (err, score) {
    if (err) {
      console.log(err);
    } else {
      res.json(score);
    }
  });
});

// To Add New Score
scoreRoute.route("/addScore").post(function (req, res) {
  let score = new scoreModel(req.body);
  score
    .save()
    .then((game) => {
      res.status(200).json({ score: "Score Added Successfully" });
    })
    .catch((err) => {
      res.status(400).send({ error: "Something Went Wrong" });
    });
});

module.exports = scoreRoute;
