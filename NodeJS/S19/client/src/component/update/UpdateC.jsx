import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function UpdateC() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    _id: 0,
    name: "",
    password: "",
    phone: 0,
  });
  useEffect(() => {
    axios
      .get(`http://localhost:7979/getOneUser/${id}`)
      .then((res) => {
        // console.log(res.data.result);
        setUser(res.data.result);
      })
      .catch(() => {
        alert("Failed to fetch user data");
      });
  }, []);

  const updateUser = () => {
    axios
      .put("http://localhost:7979/updateuser", user)
      .then((res) => {
        navigate("/home");
      })
      .catch((error) => {
        alert("error while updating user");
      });
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "100px",

      height: "100vh",

      fontFamily: '"Roboto", sans-serif',
    },
    form: {
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      width: "100%",
      maxWidth: "400px",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      color: "red",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    button: {
      width: "100%",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#2575fc",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    buttonHover: {
      backgroundColor: "#1a5bb8",
    },
    links: {
      marginTop: "15px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "14px",
      color: "#2575fc",
    },
    link: {
      textDecoration: "none",
      color: "#2575fc",
      transition: "color 0.3s",
    },
    linkHover: {
      color: "#1a5bb8",
    },
  };
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <div style={styles.title}>Update User</div>
        <input
          value={user.name}
          type="text"
          placeholder="Username"
          style={styles.input}
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
        <input
          value={user.password}
          type="password"
          placeholder="Password"
          style={styles.input}
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
        />
        <input
          value={user.phone}
          type="text"
          placeholder="Phone"
          style={styles.input}
          onChange={(e) => {
            setUser({
              ...user,
              phone: e.target.value,
            });
          }}
        />
        <button onClick={updateUser} style={styles.button} type="button">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateC;
