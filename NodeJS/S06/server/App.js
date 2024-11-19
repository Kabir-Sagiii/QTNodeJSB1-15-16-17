const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.mkdir("./HTML", (error) => {
    if (error) {
      res.end("<h1 style='color:red;'>Error while creating Folder</h1>");
    } else {
      res.end("<h1 style='color:green;'>Folder is Created</h1>");
    }
  });
});

// const server = http.createServer((req, res) => {
//   res.end("<h1>First Response to Client</h1>");
// });

server.listen(5656, () => {
  console.log("Server is Started");
});
//http://localhost:5656
