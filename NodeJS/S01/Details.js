var getUsers = require("./Users.js");
var obj = require("./Dummy.js");

function displayUsers(users) {
  users.forEach((user) => {
    console.log(user);
  });
}

console.log(obj.usersdata);

// var data = getUsers();

// displayUsers(data);
