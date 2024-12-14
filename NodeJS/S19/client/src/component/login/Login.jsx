import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    password: "",
  });
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

  const handleControls = (event) => {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:7979/auth/login", state, {
        headers: {
          Authorization: ``,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.ok) {
          localStorage.setItem("token", res.data.token);
          navigate("/home");
        } else {
          throw new Error("user does not exist");
        }
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <div style={styles.title}>Login</div>
        <input
          onChange={handleControls}
          type="text"
          name="name"
          value={state.name}
          placeholder="Username"
          style={styles.input}
        />
        <input
          onChange={handleControls}
          type="password"
          name="password"
          value={state.password}
          placeholder="Password"
          style={styles.input}
        />
        <button onClick={login} style={styles.button} type="button">
          Login
        </button>
        <div style={styles.links}>
          <Link to="/forgot-password" style={styles.link}>
            Forgot Password?
          </Link>
          <Link to="/signup" style={styles.link}>
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
