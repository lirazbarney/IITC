const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: [true, "email already exists!"],
  },
  password: { type: String, required: true },
  plan: {
    type: String,
    enum: ["Standard", "Gold", "Platinum"], // standard: 1 business / gold: 3 businesses / platinum: 10 businesses
    default: "Standard",
  },
  savedBusinesses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Business" }],
});

module.exports = mongoose.model("User", userSchema);
