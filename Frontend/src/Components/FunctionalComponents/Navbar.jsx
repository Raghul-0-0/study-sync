import { Link } from "react-router-dom";
import "../Css/Navbar.css";

const Navbar = () => {
    return(
        <header>
            <nav className="test">

                <li className="navbar">
                    <span className="navbarSs"><b>Study Sync</b></span>
                    <Link to="/" className="navbarText">HOME</Link>
                    <Link to="/Settings" className="navbarText">SETTINGS</Link>
                    <Link to="/Login" className="navbarText">LOGIN</Link>
                    <Link to="/Contact" className="navbarText"> CONTACT</Link>
                </li>

            </nav>
        </header>
    )
}

export default Navbar;
