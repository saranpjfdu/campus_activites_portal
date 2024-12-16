import React from 'react';
import Footer from './Footer'; // Ensure proper import for Footer
import './DashboardLayout.css'; // Import the CSS for layout
import { Outlet } from 'react-router-dom'; // Use Outlet to render child routes

const DashboardLayout = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-container">
        Campus activity portal
      </div>

      {/* <Footer />  */}
    </div>
  );
};

export default DashboardLayout;
