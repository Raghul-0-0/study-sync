import React from "react";
import { Link } from "react-router-dom";
import "../Css/Signup.css"
import axios from 'axios';
const Signup = () =>{

    const sendSignupDetails = (e) => {
        e.preventDefault(); // Prevents page reload
            console.log("Hi from sendSignupDetails function");
    
        axios.post("http://localhost:5000/signup", {
            "userName": "Raghul9",
            "password": "postman"
        })
        .then(response => console.log("Response:", response.data))
        .catch(error => console.error("Error:", error));
    };
    
    console.log("bruh testing ")
    return(
        <div className="parentSignup">
        <div className="signupBox">
            <form onSubmit={sendSignupDetails}>
            <h1>SIGN IN</h1>

                <label htmlFor="username">USERNAME</label> <br />
                <input type="text" id="username" required /> <br/>
                <label htmlFor="password">PASSWORD</label> <br />
                <input type="text" id="password" required /> <br/>
                <button type="submit"> Sign up</button>
                
                <p>Already have an account?<Link to="/login" className="loginButton">Login</Link> </p>
              </form>
        </div>
        </div>
    )
}
 

//

export default Signup;