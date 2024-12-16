import React, { useState } from 'react';
import './StudentApplications.css'; // Add your CSS here

const StudentApplications = () => {
  // Sample data for student applications
  const [applications, setApplications] = useState([
    {
      id: 1,
      studentName: 'Saran',
      rollNumber: '7376222IT251',
      department: 'IT',
      clubLab: 'Robotics Club',
      applicationDate: '2024-09-15',
      status: 'Pending',
      reason: 'Interested in robotics and automation',
      previousClub: 'AI Club',
      previousLab: 'IoT Lab',
      currentClub: 'Robotics Club',
      currentLab: 'Robotics Lab',
    },
    {
      id: 2,
      studentName: 'Lingesh',
      rollNumber: '7376222IT180',
      department: 'IT',
      clubLab: 'AI Lab',
      applicationDate: '2024-09-18',
      status: 'Pending',
      reason: 'Looking to explore AI and data science',
      previousClub: 'Cyber Security Club',
      previousLab: 'Embedded Systems Lab',
      currentClub: 'AI Club',
      currentLab: 'AI Lab',
    },
    {
      id: 3,
      studentName: 'Gokul',
      rollNumber: '7376222IT140',
      department: 'IT',
      clubLab: 'AQUATECH INNOVATION',
      applicationDate: '2024-09-18',
      status: 'Pending',
      reason: 'to learn the latest advancements in water technology and innovation',
      previousClub: 'Cyber Security Club',
      previousLab: 'Embedded Systems Lab',
      currentClub: 'AI Club',
      currentLab: 'AI Lab',
    },
    {
      id: 4,
      studentName: 'Keerthivasan',
      rollNumber: '7376222AD155',
      department: 'AIDS',
      clubLab: 'AI Lab',
      applicationDate: '2024-09-18',
      status: 'Pending',
      reason: 'exploring innovative methods and applications in AI and data science',
      previousClub: 'Cyber Security Club',
      previousLab: 'IOT',
      currentClub: 'AI Club',
      currentLab: 'AI Lab',
    },
    // Add more applications here
  ]);

  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false); // For viewing details
  const [showRejectionModal, setShowRejectionModal] = useState(false); // For rejection
  const [rejectionReason, setRejectionReason] = useState(''); // Tracks the rejection reason

  // Function to handle approval of an application
  const handleApprove = (id) => {
    const updatedApplications = applications.map((app) =>
      app.id === id ? { ...app, status: 'Approved' } : app
    );
    setApplications(updatedApplications);
  };

  // Function to handle rejection of an application
  const handleReject = (id) => {
    const updatedApplications = applications.map((app) =>
      app.id === id ? { ...app, status: 'Rejected', rejectionReason } : app
    );
    setApplications(updatedApplications);
    setShowRejectionModal(false); // Close the modal after rejection
    setRejectionReason(''); // Clear the rejection reason
  };

  // Open rejection modal
  const openRejectionModal = (application) => {
    setSelectedApplication(application);
    setShowRejectionModal(true);
  };

  // Open details modal
  const openDetailsModal = (application) => {
    setSelectedApplication(application);
    setShowDetailsModal(true);
  };

  // Close details modal
  const closeDetailsModal = () => {
    setSelectedApplication(null);
    setShowDetailsModal(false);
  };

  // Filter applications based on the search term
  const filteredApplications = applications.filter(
    (app) =>
      app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="student-applications-container">
      <div className="student-applications">
        <h2 className="applications-title">Student Applications</h2>
        <p className="applications-description">View pending applications from students.</p>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by student name or roll number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />

        <table className="applications-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Roll Number</th>
              <th>Department</th>
              <th>Club/Lab Applied For</th>
              <th>Application Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id}>
                <td>{app.studentName}</td>
                <td>{app.rollNumber}</td>
                <td>{app.department}</td>
                <td>{app.clubLab}</td>
                <td>{app.applicationDate}</td>
                <td>{app.reason}</td>
                <td>{app.status}</td>
                <td>
                  {app.status === 'Pending' ? (
                    <>
                      <button onClick={() => handleApprove(app.id)} className="approve-btn">
                        Approve
                      </button>
                      <button onClick={() => openRejectionModal(app)} className="reject-btn">
                        Reject
                      </button>
                      <button onClick={() => openDetailsModal(app)} className="view-btn">
                        View Details
                      </button>
                    </>
                  ) : (
                    <span>{app.status}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Rejection Modal */}
        {showRejectionModal && selectedApplication && (
          <div className="modal">
            <div className="modal-content">
              <h2>Reject Application</h2>
              <p>
                Are you sure you want to reject the application from{' '}
                {selectedApplication.studentName}?
              </p>
              <textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
                placeholder="Enter reason for rejection"
              />
              <div className="modal-actions">
                <button
                  onClick={() => handleReject(selectedApplication.id)}
                  className="reject-confirm-btn"
                >
                  Confirm Rejection
                </button>
                <button onClick={() => setShowRejectionModal(false)} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Details Modal */}
        {showDetailsModal && selectedApplication && (
          <div className="modal">
            <div className="modal-content">
              <h2>Application Details</h2>
              <p><strong>Student Name:</strong> {selectedApplication.studentName}</p>
              <p><strong>Roll Number:</strong> {selectedApplication.rollNumber}</p>
              <p><strong>Department:</strong> {selectedApplication.department}</p>
              <p><strong>Club/Lab Applied For:</strong> {selectedApplication.clubLab}</p>
              <p><strong>Application Date:</strong> {selectedApplication.applicationDate}</p>
              <p><strong>Reason for Application:</strong> {selectedApplication.reason}</p>
              <div className="modal-actions">
                <button onClick={closeDetailsModal} className="close-btn">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentApplications;