const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Score = new Schema(
  {
    score: {
      type: String,
    },
  },
  {
    collection: "score",
  }
);

module.exports = mongoose.model("Score", Score);
