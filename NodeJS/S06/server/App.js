const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  var result;
  fs.mkdir("./HTML", (error) => {
    if (error) {
      res.end(JSON.stringify({ data: "<h1 style='color:red'>error</h1>" }));
    } else {
      res.end(JSON.stringify({ data: "<h1 style='color:green'>created</h1>" }));
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
