import { useState } from "react";
// import { format } from "date-fns";
import axios from "axios";
import "../Css/AddExam.css";

const AddExam = ({ currentUser }) => {
  const [examName, setExamName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [examTime, setExamTime] = useState("");
  const [examNotes, setExamNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://study-sync-35ie.onrender.com/exams", {
        username: currentUser,
        name: examName,
        date: examDate,
        time: examTime,
        notes: examNotes
      });
      alert("Exam added successfully!");
      setExamName("");
      setExamDate("");
      setExamTime("");
      setExamNotes("");
    } catch (error) {
      console.error("Error adding exam:", error);
      alert("Failed to add exam");
    }
  };

  return (
    <div className="add-exam-container">
      <h2>Add New Exam</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Exam Name:</label>
          <input
            type="text"
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={examTime}
            onChange={(e) => setExamTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Notes:</label>
          <textarea
            value={examNotes}
            onChange={(e) => setExamNotes(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">
          Add Exam
        </button>
      </form>
    </div>
  );
};

export default AddExam;