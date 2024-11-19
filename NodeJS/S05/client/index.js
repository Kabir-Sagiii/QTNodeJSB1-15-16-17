function createFile() {
  //write logic to send a request to server

  fetch("http://localhost:4646/create", { mode: "no-cors" })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //JS code
    })
    .catch((error) => {
      //JS code
    });
}

function deleteFile() {
  //write logic to send a request to server

  fetch("http://localhost:4646/remove", { mode: "no-cors" })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      alert("error");
      console.log(error);
      //JS code
    });
}
