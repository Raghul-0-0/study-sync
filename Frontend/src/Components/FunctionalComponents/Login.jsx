import { Link, useNavigate } from "react-router-dom";
import "../Css/Login.css";
import axios from "axios";
import Navbar from "./Navbar"

const Login = () =>{

    const Navigate  = useNavigate();

    const checkCredentials = async (e) =>{
        e.preventDefault();
        const un = document.getElementById("username");
        const pw = document.getElementById("password");

        await axios
            .post("http://localhost:5002/login",{
                userName:document.getElementById("username").value,
                password:document.getElementById("password").value
            })
            .then( (res) => {
                //chigga is logged in!
                <Navbar isLoggedin={true}/>
                Navigate("/");
            })
            .catch( (err) => {console.log("error when tried to send login details : ",err)} )
    }  

    return(
        
        <div className="parentLogin">
        <div className="loginBox">
            <form className="login" onSubmit={checkCredentials}>
            <h1>LOGIN</h1>

                <label htmlFor="username">USERNAME</label> <br />
                <input type="text" id="username" required className="inputField"/> <br/>
                <label htmlFor="password">PASSWORD</label> <br />
                <input type="text" id="password" required className="inputField"/> <br/>
                <button type="submit" className="loginButton"> Log in</button>
                <p>New to Study Sync?<Link to="/signup" className="signupButton">Signup</Link> </p>
              </form>
        </div>
        </div>

    )
}
 

//

export default Login;