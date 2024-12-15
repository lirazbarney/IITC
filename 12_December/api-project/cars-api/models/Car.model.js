const mongoose = require("mongoose");

const CarSchema = mongoose.Schema({
  make: {
    type: String,
    required: true,
    minlength: 2,
  },
  model: {
    type: String,
    required: true,
    minlength: 2,
  },
  year: {
    type: Number,
    required: true,
    default: 2024,
  },
});

module.exports = mongoose.model("Car", CarSchema);
