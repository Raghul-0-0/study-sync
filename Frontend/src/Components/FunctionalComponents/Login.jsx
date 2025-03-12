import { Link } from "react-router-dom";
import "../Css/Login.css"
const Login = () =>{

    const checkCredentials = async (e) =>{
        const un = document.getElementById("username");
        const pw = document.getElementById("password");

        await axios
            .post()
    }  

    return(
        
        <div className="parentLogin">
        <div className="loginBox">
            <form className="login" action="/submit" method="POST">
            <h1>LOGIN</h1>

                <label htmlFor="username">USERNAME</label> <br />
                <input type="text" id="username" required className="inputField"/> <br/>
                <label htmlFor="password">PASSWORD</label> <br />
                <input type="text" id="password" required className="inputField"/> <br/>
                <button type="submit" className="loginButton"> Log in</button>
                <p>New to Study Sync?<Link to="/signup" class="signupButton">Signup</Link> </p>
              </form>
        </div>
        </div>
    )
}
 

//

export default Login;