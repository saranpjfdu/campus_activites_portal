import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Fetch user role from localStorage
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  // Handle sign out
  const handleSignOut = () => {
    localStorage.clear(); // Clear localStorage
    navigate('/'); // Navigate to the login page
    window.location.reload()
  };

  return (
    <nav className="sidebar">
      <ul>
        {userRole === '1' && (
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
        )}
        {userRole === '2' && (
          <li>
            <Link to="/student">Student Dashboard</Link>
          </li>
        )}
        <li>
          <Link to="/clubs-labs">View Clubs/Labs</Link>
        </li>
        <li>
          <Link to="/achivements">View Achievements</Link>
        </li>
        {/* Sign Out button */}
        {userRole && (
          <li>
            <button onClick={handleSignOut} style={styles.signOutButton}>
              Sign Out
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  signOutButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    cursor: 'pointer',
    borderRadius: '4px',
    fontSize: '14px',
  },
};

export default Navbar;
