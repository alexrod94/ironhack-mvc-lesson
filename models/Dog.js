const mongoose = require("mongoose");

const Dog = mongoose.model("Dog", {
  name: String,
  age: Number,
});

module.exports = { Dog };
