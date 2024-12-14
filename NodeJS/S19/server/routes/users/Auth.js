const express = require("express");
const jwt = require("jsonwebtoken");
const createConnection = require("../../model/Connection");
const secret_key = "kjdsbvkjdfbnvjdfbvjdfnvdjfkvbdksncjdksncdjksnvkjds";
const route = express.Router();

route.post("/login", async (req, res) => {
  var user = req.body;

  const collection = await createConnection();

  var userdata = await collection.findOne(user);

  if (userdata === null) {
    res.json({
      ok: false,
      result: "User does not exit",
    });
  } else {
    //to create token
    const token = jwt.sign(userdata, secret_key);

    res.json({
      ok: true,
      token: token,
    });
  }
}); //http://localhost:7979/auth/login

route.get("/forgotpassword", (req, res) => {
  res.send("Forgot Password working");
}); //http://localhost:7979/auth/forgorpassword

module.exports = route;
