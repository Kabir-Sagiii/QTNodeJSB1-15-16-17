import Login from "./component/login/Login";
import "./App.css";
import Signup from "./component/signup/Signup";
import { Route, Routes } from "react-router-dom";
import Home from "./component/home/Home";
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
