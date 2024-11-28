const mongoose = require("mongoose");

const TutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  published: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model("Tutorial", TutorialSchema);
