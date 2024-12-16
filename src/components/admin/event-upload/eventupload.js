import React, { useState } from 'react';
import './EventUpload.css'; // Import your CSS file for styling

const EventUpload = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [poster, setPoster] = useState(null); // State for storing the uploaded image

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!eventName || !eventDate || !eventDescription || !eventLocation || !poster) {
      alert('Please fill in all fields and upload a poster');
      return;
    }

    // Create FormData object to handle file upload
    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('eventDate', eventDate);
    formData.append('eventDescription', eventDescription);
    formData.append('eventLocation', eventLocation);
    formData.append('poster', poster);

    // Process form data (e.g., send to API or update state)
    console.log('Event Data:', {
      eventName,
      eventDate,
      eventDescription,
      eventLocation,
      poster
    });

    // Clear the form fields
    setEventName('');
    setEventDate('');
    setEventDescription('');
    setEventLocation('');
    setPoster(null);
  };

  const handleFileChange = (e) => {
    setPoster(e.target.files[0]); // Update state with the selected file
  };

  return (
    <div className="event-upload-container">
      <h2 className="event-upload-header">Upload Event Details</h2>
      <form className="event-upload-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDate">Event Date:</label>
          <input
            type="date"
            id="eventDate"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventDescription">Event Description:</label>
          <textarea
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="eventLocation">Event Location:</label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="poster">Event Poster:</label>
          <input
            type="file"
            id="poster"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Upload Event</button>
      </form>
    </div>
  );
};

export default EventUpload;
