import React from 'react';
import '../assets/styles/ContactPage.css';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We'll inform you in mail");
  };

  return (
    <div className="booking-form-container">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="input-field">
          <input type="text" placeholder="Full Name" name="fullName" required />
        </div>
        <div className="input-field">
          <input type="email" placeholder="E-mail" name="email" required />
        </div>
        <div className="input-field">
          <input type="tel" placeholder="Mobile Number" name="mobileNumber" required />
        </div>
        <div className="input-field">
          <select name="eventType" required>
            <option value="" disabled selected>Select Event Type</option>
            <option value="baby-shower">Baby Shower</option>
            <option value="marriage">Marriage</option>
            <option value="birthday-party">Birthday Party</option>
            <option value="surprise-events">Surprise Events</option>
          </select>
        </div>
        <div className="input-field">
          <textarea placeholder="Write Your Message" name="message" required></textarea>
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default ContactPage;
