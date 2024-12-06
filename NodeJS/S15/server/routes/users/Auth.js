const express = require("express");
const createConnection = require("../../model/Connection");
const route = express.Router();

route.get("/login", async (req, res) => {
  const user = { name: "Rama S", password: "rama@123" };

  const collection = await createConnection();

  var data = await collection.findOne(user);
  if (data === null) {
    res.json({
      ok: false,
      result: "Invalid User",
    });
  } else {
    res.json({
      ok: true,
      result: "Valid User",
    });
  }
}); //http://localhost:7979/auth/login

route.get("/forgotpassword", (req, res) => {
  res.send("Forgot Password working");
}); //http://localhost:7979/auth/forgorpassword

module.exports = route;
