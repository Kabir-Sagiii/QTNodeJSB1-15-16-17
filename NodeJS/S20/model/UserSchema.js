var mongoose = require("mongoose");

// var UserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: Number,
// });

//structure or rules of the document
var UserSchema = new mongoose.Schema({
  name: {
    type: String,

    required: true,
  },
  email: {
    type: String,
    default: "s@gmail.com",
    required: true,
  },
  phone: {
    type: Number,
    default: 0,
    required: false,
  },
});

//template of the document
var userModel = mongoose.model("user", UserSchema);

module.exports = userModel;
