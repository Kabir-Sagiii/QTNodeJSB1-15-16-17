const http = require("http");
const fs = require("fs");

function createFolder(res) {
  fs.mkdir("./NodeJs", (error) => {
    if (error) {
      res.end("<h1 style='color:red'>Sorry, Failed to Create Folder</h1>");
    } else {
      res.end("<h1 style='color:green'>Hey, Folder created successfully</h1>");
    }
  });
}

function deleteFolder(res) {
  fs.rmdir("./NodeJs", (error) => {
    if (error) {
      res.end("<h1 style='color:red'>Sorry, Failed to Remove Folder</h1>");
    } else {
      res.end("<h1 style='color:green'>Hey, Folder Deleted successfully</h1>");
    }
  });
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(req.url);
  if (req.url === "/create") {
    createFolder(res);
  } else {
    deleteFolder(res);
  }
}); //http://localhost:3636/create
//http://localhost:3636/remove

server.listen(3636, () => {
  console.log("Server Started ....");
});
