import "../Css/Home.css"

import { Link } from "react-router-dom";

const Home = ({ isLoggedIn }) => {
  return(
    <div className="parent">
      {isLoggedIn ? (
        <div className="logged-in-home">
          <h1> Study Sync!</h1>
          <div className="action-buttons">
            <Link to="/add-exam" className="exam-button">Add an Exam</Link>
            <Link to="/calendar" className="calendar-button">See Calendar</Link>
          </div>
        </div>
      ) : (
        <div className="hero">
          <h1>Plan & Stay Updated on Your Exams!</h1>
          <h2>Track upcoming exams, receive notifications, and manage your study schedule efficiently using Study Sync</h2>
        </div>
      )}
    </div>
  )
}

export default Home;