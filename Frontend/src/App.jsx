import Home from "./Components/FunctionalComponents/Home";
import Login from "./Components/FunctionalComponents/Login";
import Navbar from "./Components/FunctionalComponents/Navbar";
import Settings from "./Components/FunctionalComponents/Settings";
import Signup from "./Components/FunctionalComponents/Signup";
import Contact from "./Components/FunctionalComponents/Contact"
import "./Components/Css/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return(
    <main>
      <BrowserRouter>

        <Navbar/>
        <Routes>
          <Route path = "/" element={<Home/>} />
          <Route path = "/Login" element={<Login/>} />
          <Route path = "/Signup" element={<Signup/>} />
          <Route path = "/Settings" element={<Settings/>} />
          <Route path = "/Contact" element={<Contact/>} />

        </Routes>

      </BrowserRouter>
    </main>    
  )
}

export default App
