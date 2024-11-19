const http = require("http");
const fs = require("fs");

var server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/create") {
    fs.mkdir("./HTML", (error) => {
      if (error) {
        res.end("failed to create");
      } else {
        res.end("Create successfullly");
      }
    });
  } else {
    fs.rmdir("./HTML", (error) => {
      if (error) {
        res.end("failed to delete");
      } else {
        res.end("");
      }
    });
  }
});

server.listen(4646, () => {
  console.log("working");
});
