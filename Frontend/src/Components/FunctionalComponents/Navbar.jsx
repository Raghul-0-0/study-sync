import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import Login from "./Login";
import { useState } from 'react';

const Navbar = ({ isLoggedIn, currentUser, onLogout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return(
    <header>
      <nav className="test">
        <li className="navbar">
          <span className="navbarSs"><b>Study Sync</b></span>
          <Link to="/" className="navbarText">HOME</Link>
          {isLoggedIn ? (
            <div className="user-dropdown" 
                 onMouseEnter={() => setShowDropdown(true)}
                 onMouseLeave={() => setShowDropdown(false)}>
              <button className="navbarText user-greeting">
                Hi, {currentUser}
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <button onClick={onLogout} className="logout-button">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/Login" className="navbarText">LOGIN</Link>
          )}
          <Link to="/Contact" className="navbarText">CONTACT</Link>
        </li>
      </nav>
    </header>
  )
}

export default Navbar;