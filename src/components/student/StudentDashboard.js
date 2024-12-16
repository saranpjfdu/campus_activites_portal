import React from 'react';
import './StudentDashboard.css'; // Import the CSS for styling
import { Typography } from '@mui/material';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard">
      <Typography variant='h3'>Student Dashboard</Typography>
      <div className="card-container">
        {/* Apply for Clubs/Labs */}
        <div className="card">
          <h3>Apply for Clubs/Labs</h3>
          <p>Apply to join a club or lab of your choice.</p>
          <button onClick={() => window.location.href = '/apply-clubs-labs'}>APPLY FOR CLUBS/LABS</button>
        </div>

        {/* Apply for Events */}
        <div className="card">
          <h3>Apply for Events</h3>
          <p>Apply to events organized by your clubs or labs.</p>
          <button onClick={() => window.location.href = '/apply-events'}>APPLY FOR EVENTS</button>
        </div>

        {/* Change Clubs/Labs */}
        <div className="card">
          <h3>Change Clubs/Labs</h3>
          <p>Switch to a different club or lab if needed.</p>
          <button onClick={() => window.location.href = '/change-clubs-labs'}>CHANGE CLUBS/LABS</button>
        </div>

        {/* View Profile */}
        <div className="card">
          <h3>View Profile</h3>
          <p>See your profile and track your activities.</p>
          <button onClick={() => window.location.href = '/view-profile'}>VIEW PROFILE</button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
