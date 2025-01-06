import React, { useState } from 'react';
import './GetRide.css'; // Link to the new GetRide.css
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for datepicker
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

function GetRide() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    bikeLocation: 'Presidency University',
    date: '',
    fromTime: '',
    toTime: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle date and time changes
  const handleDateChange = (date, name) => {
    setFormData((prev) => ({ ...prev, [name]: date }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
    // Additional logic to handle form submission can be added here
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const { name, age, mobile, email, date, fromTime, toTime } = formData;
    return `I%20want%20to%20book%20a%20ride.%20Here%20are%20my%20details%3A%0A%0AName%3A%20${name}%0AAge%3A%20${age}%0AMobile%3A%20${mobile}%0AEmail%3A%20${email}%0ADate%3A%20${date}%0AFrom%20Time%3A%20${fromTime}%0ATo%20Time%3A%20${toTime}`;
  };

  return (
    <div className="get-ride-container">
      <div className="back-arrow" onClick={() => navigate('/')}>⬅</div>
      <h1>Get Ride</h1>
      <p>Fill out the details below to book a bike!</p>

      <div className="booking-options">
        {/* WhatsApp Booking */}
        <div className="whatsapp-booking">
          <h2>Book via WhatsApp</h2>
          <div className="whatsapp-content">
            <FaWhatsapp size={40} color="#25D366" />
            <p>You can chat with us and book your ride directly through WhatsApp.</p>
            <a
              href={`https://wa.me/+917892454611?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button-link"
            >
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Old Form Booking */}
        <div className="get-ride-form">
          <h2>Or, Book via Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="bikeLocation">Select Bike Renting Location</label>
                <select
                  id="bikeLocation"
                  name="bikeLocation"
                  value={formData.bikeLocation}
                  onChange={handleChange}
                >
                  <option value="Presidency University">Presidency University</option>
                  {/* Additional locations can be added here */}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Select Date</label>
                <DatePicker
                  id="date"
                  name="date"
                  selected={formData.date}
                  onChange={(date) => handleDateChange(date, 'date')}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select date"
                  required
                />
              </div>
            </div>

            <div className="time-group">
              <div className="form-group">
                <label htmlFor="fromTime">From Time</label>
                <DatePicker
                  id="fromTime"
                  name="fromTime"
                  selected={formData.fromTime}
                  onChange={(date) => handleDateChange(date, 'fromTime')}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  placeholderText="Select time"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="toTime">To Time</label>
                <DatePicker
                  id="toTime"
                  name="toTime"
                  selected={formData.toTime}
                  onChange={(date) => handleDateChange(date, 'toTime')}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  placeholderText="Select time"
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetRide;
