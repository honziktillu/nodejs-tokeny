const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
});

module.exports = mongoose.model("Book", bookSchema);