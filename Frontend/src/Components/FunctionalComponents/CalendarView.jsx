import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "../Css/CalendarView.css";
import { FiAlertCircle } from "react-icons/fi";

const CalendarView = ({ currentUser }) => {
  const [date, setDate] = useState(new Date());
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5002/exams/${currentUser}`
        );
        setExams(response.data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };
    fetchExams();
  }, [currentUser]);

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dayExams = exams.filter(
        (exam) => new Date(exam.date).toDateString() === date.toDateString()
      );
      return dayExams.length > 0 ? <FiAlertCircle className="exam-dot" /> : null;
    }
  };

  return (
    <div className="calendar-container">
      <h2>Exam Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={tileContent}
        className="react-calendar"
      />
    </div>
  );
};

export default CalendarView;