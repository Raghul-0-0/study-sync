import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import { useState,useNavigate } from "react";

const Navbar = ({ isLoggedIn, currentUser }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    window.location.reload(); // Force refresh the page
    navigate("/");
  };

  return (
    <header>
      <nav className="test">
        <li className="navbar">
          <span className="navbarSs"><b>Study Sync</b></span>
          <Link to="/" className="navbarText">HOME</Link>

          {isLoggedIn ? (
            <div
              className="user-dropdown"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="navbarText user-greeting">
                Hi, {currentUser}
              </button>
              {showDropdown && (
                <div className="dropdown-content">
                  <button onClick={handleLogout} className="logout-button">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
                <Link to="/login" className="navbarText">LOGIN</Link>
          )}

          <Link to="/Contact" className="navbarText">CONTACT</Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
