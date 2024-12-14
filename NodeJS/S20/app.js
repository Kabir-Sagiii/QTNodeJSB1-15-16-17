var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var userModel = require("./model/UserSchema");
var app = express();

app.use(cors());
app.use(express.json());

async function connectDB() {
  await mongoose.connect("mongodb://localhost:27017/demodb");
}

connectDB();

app.get("/getuser", async (req, res) => {
  var userdata = await userModel.find();
  res.json({
    ok: true,
    data: userdata,
  });
}); //http://localhost:9898/getuser

app.post("/adduser", async (req, res) => {
  var newdata = req.body;

  var user = new userModel(newdata);

  await user.save();

  res.json({
    ok: true,
    result: "User Created",
  });
}); //http://localhost:9898/adduser

app.listen(9898, () => {
  console.log("Server Started");
});
