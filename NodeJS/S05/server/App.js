const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  fs.mkdir("./HTML", (error) => {
    if (error) {
    } else {
    }
  });
});
