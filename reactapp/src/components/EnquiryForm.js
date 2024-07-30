import React, { useState } from 'react';
import '../assets/styles/EnquiryForm.css';
const EnquiryForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("We'll inform you in mail");
  };

  return (
    <div className="enquiry-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Enquiry Form</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Mobile No." required />
        <select required>
          <option value="" disabled selected>Event Type</option>
          <option value="baby_shower">Baby Shower</option>
          <option value="marriage">Marriage</option>
          <option value="birthday_party">Birthday Party</option>
          <option value="surprise_events">Surprise Events</option>
        </select>
        <button type="submit">Book Now</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default EnquiryForm;
