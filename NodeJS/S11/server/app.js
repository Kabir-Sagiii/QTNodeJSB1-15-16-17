const express = require("express");
const fs = require("fs");

const app = express();

app.get("/gettext", (req, res) => {
  res.send("Welcome to Express JS");
}); //endpoint or api //http://localhost:6767/gettext

app.get("/getjson", (req, res) => {
  res.json({ name: "sagar", id: 101, phn: 9999999 });
}); //http://localhost:6767/getjson

app.get("/gethtml", (req, res) => {
  res.send("<h2>Welcome to Express</h2>");
});

app.get("/gethtmlfilecontent", (req, res) => {
  fs.readFile("./public/Home.html", "utf-8", (error, data) => {
    if (error) {
      res.send("<h2>Error while reading file</h2>");
    } else {
      res.send(data);
    }
  });
}); //http://localhost:6767/gethtmlfilecontent

app.listen(6767, () => {
  console.log("Server Started");
});
