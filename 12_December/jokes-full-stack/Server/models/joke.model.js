const mongoose = require("mongoose");

const JokeSchema = mongoose.Schema({
  baseline: {
    type: String,
    required: true,
  },
  punchline: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Joke", JokeSchema);
