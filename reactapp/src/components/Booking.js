

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/styles/Booking.css';

const companies = [
  { id: '1', name: 'Wedplanners' },
  { id: '2', name: 'Marriedly' },
  { id: '3', name: 'Just Fun' },
  { id: '4', name: 'Weddays' }
];

const fetchCompanyName = (companyId) => {
  const company = companies.find(c => c.id === companyId);
  return company ? company.name : 'Unknown Company';
};

const Booking = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    eventType: '',
    eventDate: '',
  });
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => {
    const name = fetchCompanyName(id);
    setCompanyName(name);
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, then redirect to payment page
    console.log('Booking details:', formData);
    navigate(`/payment/${id}`); // Redirect to Payment page with company id
  };

  return (
    <div className="booking-container">
      
      <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book an Event with {companyName}</h2>
        <table>
          <tbody>
            <tr>
              <td><label>Name:</label></td>
              <td><input type="text" name="name" value={formData.name} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Address:</label></td>
              <td><input type="text" name="address" value={formData.address} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Phone:</label></td>
              <td><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label>Event Type:</label></td>
              <td>
                <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                  <option value="">Select event type</option>
                  <option value="babyShower">Baby Shower</option>
                  <option value="marriage">Marriage</option>
                  <option value="birthdayParty">Birthday Party</option>
                  <option value="surpriseEvents">Surprise Events</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label>Event Date:</label></td>
              <td><input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'right' }}>
                <button type="submit">Book Now</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Booking;
