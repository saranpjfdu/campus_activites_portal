import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './components/admin/AdminDashboard';
import StudentDashboard from './components/student/StudentDashboard';
import ViewClubsLabs from './components/student/ViewClubsLabs';

import ManageStudents from './components/admin/ManageStudents';
import AchievementsUpload from './components/admin/upload-achivement/AchivementsUpload';
import ManageClubsLabs from './components/admin/manage-clubs-labs/clubs-labs';
import StudentApplications from './components/admin/approve/StudentApplications';
import Reports from './components/admin/reportspage/Reports';
import Attendance from './components/admin/attendece/Attendance';

import DashboardLayout from './components/common/DashboardLayout';
import Profile from './components/student/studentprofile/profile';
import Navbar from './components/common/Navbar'; // Import Navbar if it's needed across all pages
import EventApplication from './components/student/applyevent/EventApplication';
import ChangeClubsLabs from './components/student/clubchange/ChangeClubsLabs';
import ViewAchievements from './components/student/viewachive/ViewAchievements';
import EventUpload from './components/admin/event-upload/eventupload';
import LoginPage from './components/login';


function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Fetch user role from localStorage
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  return (
      <div style={{display:'flex'}}>
        {userRole && <Navbar/>}
        <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/clubs-labs" element={<ViewClubsLabs />} />
           
            <Route path="/manage-students" element={<ManageStudents />} />
            <Route path="/achievements-uploads" element={<AchievementsUpload />} />
            <Route path="/manage-clubs-labs" element={<ManageClubsLabs />} />
            <Route path="/attendance" element={<Attendance/>} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/view-profile" element={<Profile />} />
            <Route path='/StudentDashboard' element={<DashboardLayout/>}/>
            <Route path="/apply-clubs-labs" element={<ViewClubsLabs />} />
            <Route path="/apply-events" element={<EventApplication/>} />
            <Route path='/change-clubs-labs' element={<ChangeClubsLabs/>}/>
            <Route path='/student-applications' element={<StudentApplications/>}/>
            <Route path='/achivements' element={<ViewAchievements/>}/>
            <Route path='/' element={<LoginPage setUserRole={setUserRole}/>}/>
            
            <Route path='/upcoming-events' element={<EventUpload/>}/>
      

            

        </Routes>
      </div>
  );
}

export default App;
