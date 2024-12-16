import React, { useState } from 'react';
import './ChangeClubsLabs.css';

const ChangeClubsLabs = () => {
  const [selectedClub, setSelectedClub] = useState('');
  const [selectedLab, setSelectedLab] = useState('');
  const [reason, setReason] = useState('');
  const [status, setStatus] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [previousClub, setPreviousClub] = useState({
    name: 'Coding Club',
    description: 'Enhance coding skills with coding events and mentorship.',
    activities: ['Hackathons', 'Coding Challenges'],
  });
  const [previousLab, setPreviousLab] = useState({
    name: 'Science Lab',
    description: 'Conduct experiments and enhance your scientific skills.',
    activities: ['Experiment Days', 'Field Trips', 'Research Projects'],
  });

  const clubs = [
    {
      id: 1,
      name: 'Robotics Club',
      description: 'Explore the world of robotics and AI.',
      activities: ['Workshops', 'Competitions', 'Tech Talks'],
    },
    {
      id: 2,
      name: 'Literature Club',
      description: 'Join discussions about literature and writing.',
      activities: ['Book Readings', 'Writing Workshops', 'Poetry Nights'],
    },
  ];

  const labs = [
    {
      id: 1,
      name: 'Science Lab',
      description: 'Conduct experiments and enhance your scientific skills.',
      activities: ['Experiment Days', 'Field Trips', 'Research Projects'],
    },
    {
      id: 2,
      name: 'Physics Lab',
      description: 'Dive deep into the world of physics experiments.',
      activities: ['Physics Demos', 'Research Presentations'],
    },
  ];

  const handleClubChange = (event) => {
    setSelectedClub(event.target.value);
    setSelectedLab(''); // Reset Lab when Club is selected
    setStatus('');
    setConfirmationMessage('');
  };

  const handleLabChange = (event) => {
    setSelectedLab(event.target.value);
    setSelectedClub(''); // Reset Club when Lab is selected
    setStatus('');
    setConfirmationMessage('');
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleConfirmSwitch = () => {
    if ((selectedClub || selectedLab) && reason) {
      setStatus('Pending Approval');
      setConfirmationMessage(
        `Request to switch to ${selectedClub || selectedLab} has been sent for approval.`
      );
      setSelectedClub('');
      setSelectedLab('');
      setReason('');
    } else {
      setConfirmationMessage('Please select a club or lab and provide a reason.');
    }
  };

  return (
    <div className="change-clubs-labs-container">
      <div className="header-section">
        <h2>Change Clubs/Labs</h2>
        <p>Switch to a different club or lab if needed.</p>
      </div>

      {/* Previous Club/Lab Details - Position these above the selection fields */}
      <div className="previous-sections">
        <div className="previous-club-lab">
          <h3>Previous Club</h3>
          <p><strong>Name:</strong> {previousClub.name}</p>
          <p>{previousClub.description}</p>
          <p><strong>Activities:</strong> {previousClub.activities.join(', ')}</p>
        </div>

        <div className="previous-lab">
          <h3>Previous Lab</h3>
          <p><strong>Name:</strong> {previousLab.name}</p>
          <p>{previousLab.description}</p>
          <p><strong>Activities:</strong> {previousLab.activities.join(', ')}</p>
        </div>
      </div>

      {/* Current Club Selection */}
      <div className="club-selection">
        <label htmlFor="club-select">Select a Club:</label>
        <select id="club-select" value={selectedClub} onChange={handleClubChange}>
          <option value="">Select a Club...</option>
          {clubs.map((club) => (
            <option key={club.id} value={club.name}>
              {club.name}
            </option>
          ))}
        </select>
      </div>

      {selectedClub && (
        <div className="club-details">
          <h3>Details of Selected Club</h3>
          <p>{clubs.find((club) => club.name === selectedClub)?.description}</p>
          <p><strong>Activities:</strong> {clubs.find((club) => club.name === selectedClub)?.activities.join(', ')}</p>
        </div>
      )}

      {/* Current Lab Selection */}
      <div className="lab-selection">
        <label htmlFor="lab-select">Select a Lab:</label>
        <select id="lab-select" value={selectedLab} onChange={handleLabChange}>
          <option value="">Select a Lab...</option>
          {labs.map((lab) => (
            <option key={lab.id} value={lab.name}>
              {lab.name}
            </option>
          ))}
        </select>
      </div>

      {selectedLab && (
        <div className="lab-details">
          <h3>Details of Selected Lab</h3>
          <p>{labs.find((lab) => lab.name === selectedLab)?.description}</p>
          <p><strong>Activities:</strong> {labs.find((lab) => lab.name === selectedLab)?.activities.join(', ')}</p>
        </div>
      )}

      {/* Reason Section */}
      <div className="reason-section">
        <label htmlFor="reason">Reason for changing:</label>
        <textarea
          id="reason"
          value={reason}
          onChange={handleReasonChange}
          placeholder="Enter your reason here..."
          required
        />
      </div>

      {/* Status and Confirmation */}
      <div className="status-section">
        {status && <p><strong>Status:</strong> <span className="status">{status}</span></p>}
        <div className="confirmation-section">
          <button onClick={handleConfirmSwitch}>Confirm Switch</button>
        </div>
        {confirmationMessage && (
          <div className="confirmation-message">
            <p>{confirmationMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeClubsLabs;
