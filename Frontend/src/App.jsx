import Home from "./Components/FunctionalComponents/Home";
import Login from "./Components/FunctionalComponents/Login";
import Navbar from "./Components/FunctionalComponents/Navbar";
import Settings from "./Components/FunctionalComponents/Settings";
import Signup from "./Components/FunctionalComponents/Signup";
import Contact from "./Components/FunctionalComponents/Contact"
import AddExam from "./Components/FunctionalComponents/AddExam";
import CalendarView from "./Components/FunctionalComponents/CalendarView";
import "./Components/Css/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setCurrentUser(username);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return(
    <main>
      <BrowserRouter>
      <Navbar isLoggedIn={isLoggedIn} currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} currentUser={currentUser} />} />
        <Route path = "/Signup" element={<Signup/>} />
          <Route path = "/Settings" element={<Settings/>} />
          <Route path = "/Contact" element={<Contact/>} />         
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />
          <Route path="/add-exam" element={<AddExam currentUser={currentUser} />} />
          <Route path="/calendar" element={<CalendarView currentUser={currentUser} />} />
        </Routes>
      </BrowserRouter>
    </main>    
  )
}

export default App;