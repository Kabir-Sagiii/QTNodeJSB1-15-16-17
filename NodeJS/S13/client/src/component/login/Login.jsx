import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
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

  const getUserDetails = () => {};

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <div style={styles.title}>Login</div>
        <input type="text" placeholder="Username" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />
        <button onClick={getUserDetails} style={styles.button} type="button">
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
