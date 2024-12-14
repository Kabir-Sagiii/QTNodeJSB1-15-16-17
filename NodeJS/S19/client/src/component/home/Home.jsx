import { useEffect } from "react";
import axios from "axios";
function Home() {
  useEffect(() => {
    axios
      .get("http://localhost:7979/getusers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.ok) {
          console.log("Working as per requirement");
        } else {
          throw new Error("Invalid Token");
        }
      })
      .catch(() => {
        alert("Error in home page");
      });
  }, []);
  return (
    <div>
      <h2>Home Component</h2>
    </div>
  );
}

export default Home;
