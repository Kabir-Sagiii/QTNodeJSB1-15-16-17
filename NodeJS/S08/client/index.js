function createFolder() {
  fetch("http://localhost:5656")
    .then((res) => {
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
