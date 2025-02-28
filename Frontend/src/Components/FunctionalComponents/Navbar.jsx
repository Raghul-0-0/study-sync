import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import "logo" from "Frontend\src\assets\logo.png";

const Navbar = () => {
    return(
        <header>
            <nav class="test">

                <li class="navbar">
                    <img src={logo} />
                    <span class="navbarSs"><b>Study Sync</b></span>
                    <Link to="/" class="navbarText">HOME</Link>
                    <Link to="/Settings" class="navbarText">SETTINGS</Link>
                    <Link to="/Login" class="navbarText">LOGIN</Link>
                    <Link to="/Contact" class="navbarText"> CONTACT</Link>
                </li>

            </nav>
        </header>
    )
}

export default Navbar;
