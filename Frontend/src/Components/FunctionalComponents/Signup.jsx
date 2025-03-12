import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Css/Signup.css";
import axios from "axios";
const Signup = () => {

  const [pwdVisibility, setPwdVisibility] = useState(false);
  const navigate = useNavigate();

  const sendSignupDetails = async (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Hi from sendSignupDetails function");

    const un = document.getElementById("username");
    const pw = document.getElementById("password");
    const cpw = document.getElementById("confirmPassword")

    if(pw.value!=cpw.value){
        alert("Passwords do not match!")
        return;
    }

    await axios
      .post("http://localhost:5000/signup", {
        userName: un.value,
        password: pw.value,
      })
      .then( (response) => {
        console.log("Response:", response.data); 
        navigate("/login")
        })

      .catch((error) => console.error("Error:", error));
  };

  

  return (
    <main>
    <div className="parentSignup">
      <div className="signupBox">
        <form onSubmit={sendSignupDetails}>
          <h1>SIGN IN</h1>

          <label htmlFor="username">USERNAME</label> <br />
          <input type="text" id="username" required className="inputField" /> <br />

          <label htmlFor="password">PASSWORD</label> <br />
          <input type={pwdVisibility ? "text":"password"} id="password" required className="inputField"/> <br />

          <label htmlFor="confirmPassword">CONFIRM PASSWORD</label> <br />
          <input type={pwdVisibility ? "text":"password"} id="confirmPassword" required className="inputField"/> <br />

          <button type="submit" className="signupButton"> Sign up</button>
          <p>
            Already have an account?
            <Link to="/login" className="loginButton">
              Login
            </Link>{" "}
          </p>
        </form>


      </div>
    </div>

      <button 
        className="showPasswordButton" 
        onMouseEnter={() => {setPwdVisibility(true)}}
        onMouseLeave={() => {setPwdVisibility(false)}} 
        > Show Password </button> 
    </main>
  );
};

export default Signup;
