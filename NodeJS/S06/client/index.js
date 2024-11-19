function createFolder() {
  fetch("http://localhost:5656", { mode: "no-cors" })
    .then((res) => {
      console.log(res.json);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      alert("Folder Created");
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to Create Folder");
    });
}
