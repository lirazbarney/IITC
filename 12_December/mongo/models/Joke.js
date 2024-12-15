const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  baseline: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    minlength: 3,
  },
});

module.exports = mongoose.model("Joke", jokeSchema);
