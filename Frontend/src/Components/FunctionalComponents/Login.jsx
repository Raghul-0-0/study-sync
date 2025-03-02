import { Link } from "react-router-dom";
import "../Css/Login.css"
const Login = () =>{
    return(
        
        <div className="parentLogin">
        <div className="loginBox">
            <form className="login" action="/submit" method="POST">
            <h1>LOGIN</h1>

                <label htmlFor="username">USERNAME</label> <br />
                <input type="text" id="email" required /> <br/>
                <label htmlFor="password">PASSWORD</label> <br />
                <input type="text" id="password" required /> <br/>
                <button type="submit"> Log in</button>
                <p>New to Study Sync?<Link to="/signup" class="signupButton">Signup</Link> </p>
              </form>
        </div>
        </div>
    )
}
 

//

export default Login;