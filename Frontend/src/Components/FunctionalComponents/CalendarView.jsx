import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import "../Css/CalendarView.css";
import { FiAlertCircle } from "react-icons/fi";

const CalendarView = ({ currentUser }) => {
  const [date, setDate] = useState(new Date());
  const [exams, setExams] = useState([]);
  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get(
          `https://study-sync-35ie.onrender.com/exams/${currentUser}`
        );
        setExams(response.data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };
    fetchExams();
  }, [currentUser]);

  const handleMouseEnter = (event, dayExams) => {
    const examText =
      dayExams.length > 0
        ? `${dayExams[0].name} - ${dayExams[0].notes}`
        : "No exams on this day";

    setTooltip({
      visible: true,
      text: examText,
      x: event.clientX,
      y: event.clientY + 15, // Offset below cursor
    });
  };

  const handleMouseMove = (event) => {
    setTooltip((prevTooltip) => ({
      ...prevTooltip,
      x: event.clientX,
      y: event.clientY + 15,
    }));
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const dayExams = exams.filter(
        (exam) => new Date(exam.date).toDateString() === date.toDateString()
      );

      return (
        <div
          className="tile-content"
          onMouseEnter={(e) => handleMouseEnter(e, dayExams)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {dayExams.length > 0 ? <FiAlertCircle className="exam-dot" /> : null}
        </div>
      );
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
      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            top: tooltip.y + "px",
            left: tooltip.x + "px",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default CalendarView;
