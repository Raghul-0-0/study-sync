import { Link } from "react-router-dom";
import "../Css/Signup.css"
const Signup = () =>{
    return(
        
        <div class="parentSignup">
        <div class="signupBox">
            <form action="/submit" method="POST">
            <h1>SIGN IN</h1>

                <label htmlFor="username">USERNAME</label> <br />
                <input type="text" id="email" required /> <br/>
                <label htmlFor="password">PASSWORD</label> <br />
                <input type="text" id="password" required /> <br/>
                <label htmlFor="password">CONFIRM PASSWORD</label> <br />
                <input type="text" id="password" required /> <br/>
                <button type="submit"> Sign up</button>
                
                <p>Already have an account?<Link to="/login" class="loginButton">Login</Link> </p>
              </form>
        </div>
        </div>
    )
}
 

//

export default Signup;