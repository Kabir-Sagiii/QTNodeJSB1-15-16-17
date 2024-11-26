// const fs = require("fs");

// fs.unlink("./Home.html", (error) => {
//   if (error) {
//     console.log("error file removing the file");
//   } else {
//     console.log("File deleted");
//   }
// });
// // fs.appendFile(
// //   "./Home.html",
// //   "\n<h2>Welcome to React, Node and MongoDB</h2>",
// //   (error) => {
// //     if (error) {
// //       console.log(error);
// //       console.log("Error while creating file");
// //     } else {
// //       console.log("File is created");
// //     }
// //   }
// // );

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./public/Home.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Error");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/profile") {
    fs.readFile("./public/Profile.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Error");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/products") {
    fs.readFile("./public/Products.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Error");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/contact") {
    fs.readFile("./public/Contact.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Error");
      } else {
        res.end(data);
      }
    });
  } else {
    res.end("<h1>Page not found </h1>");
  }
});

server.listen(6767, () => {
  console.log("Server Started");
}); //http://localhost:6767
