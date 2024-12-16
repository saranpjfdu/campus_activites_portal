import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './Attendance.css';

const Attendance = () => {
  // Dummy student data with club and lab names
  const students = [
    { rollNo: '7376222AD146', name: 'JAWAHAR', email: 'jawahar.ad22@bitsathy.ac.in', club: 'Coding Club', lab: null },
    { rollNo: '7376222CB138', name: 'PREMKUMAR', email: 'premkumar.cb22@bitsathy.ac.in', club: null, lab: 'Entrepreneurship Lab' },
    { rollNo: '7376222IT140', name: 'GOKUL', email: 'gokulc.it22@bitsathy.ac.in', club: null, lab: 'Design Lab' },
    { rollNo: '7376222IT180', name: 'LINGESH', email: 'lingesh.it22@bitsathy.ac.in', club: 'Debate Club', lab: null },
    { rollNo: '7376222IT251', name: 'SARAN', email: 'saran.it22@bitsathy.ac.in', club: null, lab: 'Robotics Lab' },
    { rollNo: '7376222AD155', name: 'KEERTHIVASAN', email: 'keerthivasan.ad22@bitsathy.ac.in', club: 'Electoral Literacy Club', lab: 'Aquatech Innovation' },
    { rollNo: '7376222FD137', name: 'NARAGATHINAM', email: 'naragathinam.fd22@bitsathy.ac.in', club: 'Faculty Recreation Club', lab: 'Aquatech Innovation' },
  ];

  const [attendanceData, setAttendanceData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleAttendanceChange = (rollNo) => {
    setAttendanceData((prevState) => ({
      ...prevState,
      [rollNo]: !prevState[rollNo],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm) ||
    student.rollNo.toLowerCase().includes(searchTerm)
  );

  const handleEventChange = (e) => {
    setSelectedEvent(e.target.value);
  };

  const exportToExcel = () => {
    if (!selectedEvent) {
      alert('Please select an event before exporting');
      return;
    }

    const data = filteredStudents.map((student) => ({
      RollNo: student.rollNo,
      Name: student.name,
      Email: student.email,
      Club: student.club || 'N/A',
      Lab: student.lab || 'N/A',
      Attendance: attendanceData[student.rollNo] ? 'Present' : 'Absent',
      Event: selectedEvent,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');
    XLSX.writeFile(workbook, `Attendance_${selectedEvent}.xlsx`);
  };

  return (
    <div className="attendance-container">
      <div className="attendance-heading">Mark Attendance</div>

      <div className="dropdown-container">
        <label htmlFor="eventDropdown">Select Event:</label>
        <select id="eventDropdown" value={selectedEvent} onChange={handleEventChange}>
          <option value="">-- Select Event --</option>
          <option value="Coding Club Event">Coding Club Event</option>
          <option value="Entrepreneurship Workshop">Entrepreneurship Workshop</option>
          <option value="Design Lab Workshop">Design Lab Workshop</option>
          <option value="Debate Club Event">Debate Club Event</option>
          <option value="Robotics Workshop">Robotics Workshop</option>
        </select>
      </div>

      <input
        type="text"
        placeholder="Search by name or roll number..."
        onChange={handleSearch}
        className="search-input"
      />

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Club</th>
            <th>Lab</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.club || 'N/A'}</td>
              <td>{student.lab || 'N/A'}</td>
              <td>
                <input
                  type="checkbox"
                  checked={attendanceData[student.rollNo] || false}
                  onChange={() => handleAttendanceChange(student.rollNo)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="attendance-submit-btn" onClick={() => alert('Attendance Submitted!')}>
        Submit
      </button>

      <button className="attendance-export-btn" onClick={exportToExcel}>
        Export to Excel
      </button>
    </div>
  );
};

export default Attendance;
