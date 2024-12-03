import { useState } from "react";
import axios from "axios";
function Signup() {
  const [user, setUser] = useState({
    name: "",
    password: "",
    phone: "",
  });

  const getNewUser = () => {
    axios
      .post("http://localhost:7979/newuser", user)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        alert("error while creating user");
        console.log(error);
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
      color: "#333",
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
      color: "#fff",
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
        <div style={styles.title}>Sign Up</div>
        <input
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
          type="text"
          placeholder="Username"
          style={styles.input}
        />
        <input
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
          type="password"
          placeholder="Password"
          style={styles.input}
        />
        <input
          onChange={(e) => {
            setUser({
              ...user,
              phone: e.target.value,
            });
          }}
          type="text"
          placeholder="Phone"
          style={styles.input}
        />
        <button onClick={getNewUser} style={styles.button} type="button">
          Sign Up
        </button>
        <div style={styles.links}>
          <a href="/forgot-password" style={styles.link}>
            Login Page
          </a>
        </div>
      </form>
    </div>
  );
}

export default Signup;
