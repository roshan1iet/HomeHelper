import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./BookingPage.css";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState({
    hour: "12",
    minute: "00",
    period: "AM",
  });
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [showPreview, setShowPreview] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState("Pune");
  const [selectedService, setSelectedService] = useState("Cleaning");
  const [selectedWorker, setSelectedWorker] = useState("Helper 1");

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.name.match(/^[A-Za-z ]+$/)) {
      newErrors.name = "Name should only contain letters and spaces";
    }

    if (!formData.phone.match(/^\d{10}$/)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (formData.description.length > 200) {
      newErrors.description = "Description should not exceed 200 characters";
    }

    if (!selectedDate) {
      newErrors.date = "Please select a valid date";
    }

    if (!selectedTime.hour || !selectedTime.minute || !selectedTime.period) {
      newErrors.time = "Please select a valid time";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeChange = (e) => {
    const { name, value } = e.target;
    setSelectedTime({ ...selectedTime, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const bookingData = {
        selectedDate,
        selectedTime: `${selectedTime.hour}:${selectedTime.minute} ${selectedTime.period}`,
        formData,
        selectedLocation,
        selectedService,
        selectedWorker,
      };

      try {
        const response = await fetch("/api/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        });

        if (response.ok) {
          alert("Booking Submitted! The worker has been notified.");
          // Reset form after successful submission
          setFormData({
            email: "",
            name: "",
            phone: "",
            description: "",
          });
          setSelectedDate(new Date());
          setSelectedTime({
            hour: "12",
            minute: "00",
            period: "AM",
          });
        } else {
          alert("Failed to submit booking. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting booking:", error);
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <h2>Book an Appointment</h2>
        <form className="personal-info" onSubmit={handleSubmit}>
          <div className="form-section">
            <div className="dropdowns">
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <select
                  id="location"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Nagpur">Nagpur</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="Sweeping">Sweeping</option>
                  <option value="Cooking">Cooking</option>
                  <option value="Gardening">Gardening</option>
                  <option value="Babysitting">Babysitting</option>
                  <option value="Patient Care">Patient Care</option>
                  <option value="Pet Care">Pet Care</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="helper">Helper</label>
                <select
                  id="helper"
                  value={selectedWorker}
                  onChange={(e) => setSelectedWorker(e.target.value)}
                >
                  <option value="Helper 1">Helper 1</option>
                  <option value="Helper 2">Helper 2</option>
                </select>
              </div>
            </div>

            <div className="calendar-section">
              <div className="form-group">
                <label>Select Date</label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  inline
                />
              </div>
            </div>

            <div className="time-selection">
              <label>
                Select Time
                <div className="time-picker">
                  <select
                    name="hour"
                    value={selectedTime.hour}
                    onChange={handleTimeChange}
                    aria-label="Hour"
                  >
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={String(i + 1).padStart(2, "0")}>
                        {String(i + 1).padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                  <span>:</span>
                  <select
                    name="minute"
                    value={selectedTime.minute}
                    onChange={handleTimeChange}
                    aria-label="Minute"
                  >
                    {Array.from({ length: 60 }, (_, i) => (
                      <option key={i} value={String(i).padStart(2, "0")}>
                        {String(i).padStart(2, "0")}
                      </option>
                    ))}
                  </select>
                  <select
                    name="period"
                    value={selectedTime.period}
                    onChange={handleTimeChange}
                    aria-label="AM/PM"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </label>
              {errors.time && <p className="error">{errors.time}</p>}
            </div>
          </div>

          <div className="personal-info-section">
            <h3>Personal Information</h3>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                maxLength="200"
              />
              {errors.description && <p className="error">{errors.description}</p>}
            </div>
          </div>

          <div className="button-group">
            <button type="button" className="preview-btn" onClick={() => setShowPreview(true)}>
              Preview
            </button>
            <button type="submit" className="submit-btn">
              Book Appointment
            </button>
          </div>
        </form>

        {showPreview && (
          <div className="preview-modal">
            <div className="modal-content">
              <h3>Booking Preview</h3>
              <div className="preview-details">
                <p><strong>Date:</strong> {selectedDate.toDateString()}</p>
                <p><strong>Time:</strong> {`${selectedTime.hour}:${selectedTime.minute} ${selectedTime.period}`}</p>
                <p><strong>Location:</strong> {selectedLocation}</p>
                <p><strong>Service:</strong> {selectedService}</p>
                <p><strong>Worker:</strong> {selectedWorker}</p>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Description:</strong> {formData.description}</p>
              </div>
              <button className="close-btn" onClick={() => setShowPreview(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;