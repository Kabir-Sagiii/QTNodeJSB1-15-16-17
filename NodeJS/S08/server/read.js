const fs = require("fs");

fs.readFile("./db.json", "utf-8", (error, content) => {
  if (error) {
    console.log("failed to accessing content");
  } else {
    console.log(content);
  }
});
