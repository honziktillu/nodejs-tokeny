const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  f_name: { type: String, required: true },
  l_name: { type: String, required: true },
  email: { type: String, unique: true, required: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ },
  password: { type: String, required: true },
  token: { type: String }
});

module.exports = mongoose.model("User", userSchema);