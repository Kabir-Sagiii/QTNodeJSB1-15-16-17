const fs = require("fs");

fs.writeFile("./index.html", "<h2>Welcome to Node</h2>", (error) => {
  if (error) {
    console.log("Error while creating the File");
  } else {
    console.log("File Created");
  }
});

const data = fs.writeFileSync("./index.java", "");

console.log(data);
console.log("File is Creating.......");
