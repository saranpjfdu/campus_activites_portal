import React, { useState } from 'react';
import './EventApplication.css';
import Modal from './Modal'; // Import the Modal component

const EventApplication = () => {
  const [events] = useState([
    {
      id: 1,
      name: 'Tech Workshop',
      date: '2024-10-01',
      time: '10:00 AM',
      location: 'Room A1',
      description: 'A workshop on the latest technology trends.',
    },
    {
      id: 2,
      name: 'Science Fair',
      date: '2024-10-05',
      time: '1:00 PM',
      location: 'Main Hall',
      description: 'Showcasing  science projects by students.',
    },
    {
      id: 3,
      name: 'INFERIX',
      date: '2024-11-09',
      time: '10:00 AM',
      location: 'ECE SEMINAR HALL',
      description: 'TECHINCAL SYMPOSIUM',
    },
    {
      id: 4,
      name: 'INSIGHT',
      date: '2024-12-25',
      time: '8:00 AM',
      location: 'SF SEMINAR HALL 1',
      description: 'HACKATHON',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='mainComponent'>
      <div className='header-title'>Apply for Events</div>
      <input
        type="text"
        placeholder="Search for events..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const EventCard = ({ event }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="event-card">
      <h2>{event.name}</h2>
      <p>{event.date} at {event.time}</p>
      <p>Location: {event.location}</p>
      <p>{event.description}</p>
      <button onClick={() => setShowModal(true)}>Apply Now</button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ApplyForm eventId={event.id} onClose={() => setShowModal(false)} />
      </Modal>
    </div>
  );
};

const ApplyForm = ({ eventId, onClose }) => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [reason, setReason] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the application logic here (e.g., send to API)
    setSuccessMessage('Application submitted successfully!');
    setName('');
    setRollNumber('');
    setDepartment('');
    setReason('');
    onClose(); // Close modal on successful submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Apply for Event {eventId}</h3>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={e => setRollNumber(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={e => setDepartment(e.target.value)}
        required
      />
      <textarea
        placeholder="Reason for attending"
        value={reason}
        onChange={e => setReason(e.target.value)}
        required
      />
      <button type="submit">Submit Application</button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
};

export default EventApplication;
