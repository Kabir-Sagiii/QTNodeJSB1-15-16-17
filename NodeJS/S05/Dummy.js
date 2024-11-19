var http = require("http");

var server = http.createServer((req, res) => {
  res.end("{ name: 'sagar',city:'hello' }");
});

server.listen(5656, () => {
  console.log("server started");
});
