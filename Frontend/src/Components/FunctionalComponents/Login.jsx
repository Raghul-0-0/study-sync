import { Link, useNavigate } from "react-router-dom";
import "../Css/Login.css";
import axios from "axios";
import Navbar from "./Navbar"
import { useState } from "react";

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");


    const checkCredentials = async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      try {
        const response = await axios.post("http://localhost:5002/login", {
          userName: username,
          password: password
        });
  
        if (response.data.message === "logged in !") {
          onLogin(username);
          navigate("/");
        }
      } catch (error) {
        const errorMessage = error.response?.data?.message || "Login failed";
        setError(errorMessage);
        console.error("Login error:", error);
      }
    };
  
    return (
        <div className="parentLogin">
        <div className="loginBox">
            <form className="login" onSubmit={checkCredentials}>
            <h1>LOGIN</h1>
            {error && <div className="error-message">{error}</div>}

                <label htmlFor="username">USERNAME</label> <br />
                <input type="text" id="username" required className="inputField"/> <br/>
                <label htmlFor="password">PASSWORD</label> <br />
                <input type="password" id="password" required className="inputField"/> <br/>
                <button type="submit" className="loginButton"> Log in</button>
                <p>New to Study Sync?<Link to="/signup" className="signupButton">Signup</Link> </p>
              </form>
        </div>
        </div>
    );
  };


 

//

export default Login;