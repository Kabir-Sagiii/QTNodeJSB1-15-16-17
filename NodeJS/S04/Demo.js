const fs = require("fs");

fs.rmdir("./ReactJS", (err) => {
  if (err) {
    console.log("Something went wrong while deleting the folder");
  } else {
    console.log("Removed Folder");
  }
});

// fs.mkdir("./myFirstFolder/CSS", (err) => {
//   if (err) {
//     console.log("Something went wrong");
//   } else {
//     console.log("Successfully created Folder");
//   }
// });
