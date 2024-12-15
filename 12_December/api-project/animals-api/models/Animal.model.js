const mongoose = require("mongoose");

const AnimalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  numOfLegs: {
    type: Number,
    default: 4,
  },
  sound: {
    type: String,
  },
});

module.exports = mongoose.model("Animal", AnimalSchema);
