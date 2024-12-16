import React, { useState } from 'react';
import './ManageClubsLabs.css';

const validCredentials = [
  { email: 'admin@gmail.com', password: 'admin123' },
  { email: 'mentor@example.com', password: 'mentor123' },
];

const ManageClubsLabs = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [clubsLabs, setClubsLabs] = useState([
    {
      id: 1,
      name: 'Coding Club',
      mentor: 'Dr Senthilkumar P',
      category: 'Technical',
      vision: 'Enhance coding skills',
      mission: 'Create tech leaders',
      objectives: 'Learn new programming languages, Participate in hackathons',
      logo: '/club/1-clubs.jpg',
      active: true,
    },
    {
      id: 2,
      name: 'Robotics Lab',
      mentor: 'Prof. Dhanasekar R',
      category: 'Lab',
      vision: 'Build robotics innovation',
      mission: 'Innovate in AI and automation',
      objectives: 'Build robots, Participate in international robotics contests',
      logo: '/club/2-clubs.jpg',
      active: true,
    },
  ]);

  const [newClubLab, setNewClubLab] = useState({
    name: '',
    mentor: '',
    category: '',
    vision: '',
    mission: '',
    objectives: '',
    logo: '',
    active: true,
  });

  const handleLogin = () => {
    const validUser = validCredentials.find(
      (cred) => cred.email === userEmail && cred.password === userPassword
    );

    if (validUser) {
      setIsAuthorized(true);
    } else {
      alert('You are not authorized to perform this action.');
    }
  };

  const handleAddClubLab = () => {
    if (
      newClubLab.name &&
      newClubLab.mentor &&
      newClubLab.category &&
      newClubLab.vision &&
      newClubLab.mission &&
      newClubLab.objectives
    ) {
      setClubsLabs([...clubsLabs, { ...newClubLab, id: clubsLabs.length + 1 }]);
      setNewClubLab({
        name: '',
        mentor: '',
        category: '',
        vision: '',
        mission: '',
        objectives: '',
        logo: '',
        active: true,
      });
    } else {
      alert('Please fill in all the fields.');
    }
  };

  const handleDelete = (id) => {
    setClubsLabs(clubsLabs.filter((clubLab) => clubLab.id !== id));
  };

  return (
    <div className="manage-clubs-labs">
      <div className="manage-title">Manage Clubs/Labs</div>

      {!isAuthorized && (
        <div className="login-section">
          <div className="login-title">Login</div>
          <input
            className="login-input"
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Enter your password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}

      {isAuthorized && (
        <>
          <ul className="club-list">
            {clubsLabs.map((clubLab) => (
              <li key={clubLab.id} className="club-item">
                <img
                  src={clubLab.logo}
                  alt={`${clubLab.name} Logo`}
                  className="club-logo"
                />
                <div className="club-info">
                  <div className="club-name">{clubLab.name}</div>
                  <div className="club-mentor"><strong>Mentor:</strong> {clubLab.mentor}</div>
                  <div className="club-category"><strong>Category:</strong> {clubLab.category}</div>
                  <div className="club-vision"><strong>Vision:</strong> {clubLab.vision}</div>
                  <div className="club-mission"><strong>Mission:</strong> {clubLab.mission}</div>
                  <div className="club-objectives"><strong>Objectives:</strong> {clubLab.objectives}</div>
                  <button className="delete-button" onClick={() => handleDelete(clubLab.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="add-club-lab-section">
            <div className="add-title">Add New Club/Lab</div>
            <input
              className="input-field"
              type="text"
              placeholder="Name"
              value={newClubLab.name}
              onChange={(e) => setNewClubLab({ ...newClubLab, name: e.target.value })}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Mentor"
              value={newClubLab.mentor}
              onChange={(e) => setNewClubLab({ ...newClubLab, mentor: e.target.value })}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Category (Club/Lab)"
              value={newClubLab.category}
              onChange={(e) => setNewClubLab({ ...newClubLab, category: e.target.value })}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Vision"
              value={newClubLab.vision}
              onChange={(e) => setNewClubLab({ ...newClubLab, vision: e.target.value })}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Mission"
              value={newClubLab.mission}
              onChange={(e) => setNewClubLab({ ...newClubLab, mission: e.target.value })}
            />
            <textarea
              className="input-field"
              placeholder="Objectives"
              value={newClubLab.objectives}
              onChange={(e) => setNewClubLab({ ...newClubLab, objectives: e.target.value })}
            />
            <input
              className="input-field"
              type="file"
              placeholder="Logo"
              onChange={(e) => setNewClubLab({ ...newClubLab, logo: URL.createObjectURL(e.target.files[0]) })}
            />
            <button className="add-button" onClick={handleAddClubLab}>
              Add Club/Lab
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageClubsLabs;
