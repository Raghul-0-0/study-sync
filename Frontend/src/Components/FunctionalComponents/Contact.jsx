// const Contact = () =>{
//     return(
//         <div>
//          <h1>For support or any queries contact me at study-sync-support@gmail.com</h1>
//         </div>
//     )
// }
// export default Contact;
//


import { useState } from "react";
import axios from "axios";
import "../Css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://study-sync-35ie.onrender.com/contact", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
        
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;
