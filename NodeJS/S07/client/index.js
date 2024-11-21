//http://localhost:3636/create?folder=html : Create a folder

//http://localhost:3636/remove :Removing the Folder

function createFolder() {
  fetch("http://localhost:3636/create")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      var div = document.getElementById("response");
      div.innerHTML = data;
    })
    .catch((error) => {
      var div = document.getElementById("response");
      div.innerText = "Something went Wrong";
    });
}

function removeFolder() {
  fetch("http://localhost:3636/remove")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      var div = document.getElementById("response");
      div.innerHTML = data;
    })
    .catch((error) => {
      var div = document.getElementById("response");
      div.innerText = "Something went Wrong";
    });
}
