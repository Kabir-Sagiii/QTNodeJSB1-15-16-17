const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const content = fs.readFileSync("./index.html", "utf-8");
  res.end(content);

  //   fs.readFile("./db.json", "utf-8", (error, content) => {
  //     if (error) {
  //       res.end("Error while reading content");
  //     } else {
  //       res.end(content);
  //     }
  //   });
}); //http://localhost:4747

server.listen(4747, () => {
  console.log("Started........");
});
