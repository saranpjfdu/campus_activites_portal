import React from 'react';
import './profile.css'; // Import your CSS file

import studentImage from '../../../assets/pexels-tamhoang139-1007066.jpg'; // Import the image

const Profile = () => {
  const student = {
    name: 'Saran',
    specialLab: 'Artificial Intelligence Industrial Application',
    club: 'Robotics Club',
    labInCharge: 'Dr. Anitha Kumar',
    clubInCharge: 'Mr. Ravi Shankar',
    events: [
      { name: 'AI Workshop', date: '2024-01-10', location: 'Lab 1', remarks: 'Excellent', type: 'lab' },
      { name: 'Robotics Expo', date: '2024-03-15', location: 'Main Auditorium', remarks: 'Innovative', type: 'club' },
      { name: 'Hackathon 2024', date: '2024-05-05', location: 'Computer Lab', remarks: 'Outstanding', type: 'lab' },
      { name: 'AI Symposium', date: '2024-06-22', location: 'Seminar Hall', remarks: 'Informative', type: 'lab' },
      { name: 'Club Meetup', date: '2024-07-10', location: 'Club Room', remarks: 'Engaging', type: 'club' }
    ]
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };

  // Separate events by type
  const labEvents = student.events.filter(event => event.type === 'lab');
  const clubEvents = student.events.filter(event => event.type === 'club');

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={studentImage} alt="Student" />
        </div>
        <div className="profile-details">
          <h1>{student.name}</h1>
          <p><strong>Special Lab:</strong> {student.specialLab}</p>
          <p><strong>Club:</strong> {student.club}</p>
          <p><strong>Lab In-Charge:</strong> {student.labInCharge}</p>
          <p><strong>Club In-Charge:</strong> {student.clubInCharge}</p>
        </div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="profile-events">
        <div className="event-title">Events Attended in Special Lab</div>
        <table className="events-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {labEvents.length > 0 ? (
              labEvents.map((event, index) => (
                <tr key={index}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.remarks}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No events attended in the special lab.</td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="event-title">Events Attended in Club</div>
        <table className="events-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {clubEvents.length > 0 ? (
              clubEvents.map((event, index) => (
                <tr key={index}>
                  <td>{event.name}</td>
                  <td>{event.date}</td>
                  <td>{event.location}</td>
                  <td>{event.remarks}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No events attended in the club.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
