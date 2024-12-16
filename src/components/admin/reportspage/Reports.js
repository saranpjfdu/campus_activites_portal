import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import './Reports.css';

// Register chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

const Reports = () => {
  // Dummy data
  const [data] = useState([
    { name: 'GOKUL', rollNo: '7376222IT140', clubLab: 'Coding Club', eventName: 'BIP Hackathon', date: '2024-09-15' },
    { name: 'LINGESH', rollNo: '7376222IT180', clubLab: 'Robotics Lab', eventName: 'BIP Hackathon', date: '2024-09-15' },
    { name: 'SARAN', rollNo: '7376222IT251', clubLab: 'Entrepreneurship Club', eventName: 'StartUp Expo', date: '2024-09-10' },
    { name: 'PREMKUMAR', rollNo: '7376222CB138', clubLab: 'Design Lab', eventName: 'Design Workshop', date: '2024-09-08' },
    { name: 'HARI HARAN', rollNo: '7376222AD140', clubLab: 'Debate Club', eventName: 'Debate Championship', date: '2024-09-05' },
    { name: 'KEERTHIVASAN', rollNo: '7376222AD155', clubLab: 'Coding Club', eventName: 'BIP Hackathon', date: '2024-09-15' },
    { name: 'JAWAHAR', rollNo: '7376222AD146', clubLab: 'Robotics Lab', eventName: 'Robotics Expo', date: '2024-09-03' },
    { name: 'KUDIARASU', rollNo: '7376222AD158', clubLab: 'Entrepreneurship Club', eventName: 'StartUp Expo', date: '2024-09-10' },
    { name: 'GAUTHAM', rollNo: '7376222IT137', clubLab: 'Design Lab', eventName: 'Design Workshop', date: '2024-09-08' },
    { name: 'RITHANYA', rollNo: '7376222CB142', clubLab: 'Debate Club', eventName: 'Debate Championship', date: '2024-09-05' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Filter data based on event name and date range
  const filteredData = data.filter(item => {
    const isInDateRange = (!startDate || new Date(item.date) >= new Date(startDate)) &&
                          (!endDate || new Date(item.date) <= new Date(endDate));
    return item.eventName.toLowerCase().includes(searchQuery.toLowerCase()) && isInDateRange;
  });

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text('Student Participation Report', 14, 16);
    doc.autoTable({
      head: [['Name', 'Roll No', 'Club/Lab', 'Event Name', 'Date']],
      body: filteredData.map((item) => [item.name, item.rollNo, item.clubLab, item.eventName, item.date]),
    });
    doc.save('student_participation_report.pdf');
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');
    XLSX.writeFile(workbook, 'student_participation_report.xlsx');
  };

  // Bar Chart for event participation
  const eventBarChartData = {
    labels: ['BIP Hackathon', 'StartUp Expo', 'Design Workshop', 'Debate Championship', 'Robotics Expo'],
    datasets: [
      {
        label: 'Students Participated',
        data: [5, 3, 2, 2, 1],
        backgroundColor: 'rgba(54, 162, 235, 0.8)', // blue
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart for Club vs Lab Participation
  const clubLabPieChartData = {
    labels: ['Coding Club', 'Robotics Lab', 'Entrepreneurship Club', 'Design Lab', 'Debate Club'],
    datasets: [
      {
        label: 'Club vs Lab Participation',
        data: [2, 2, 2, 2, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // Line Chart for participation over time
  const participationOverTimeData = {
    labels: ['2024-09-01', '2024-09-05', '2024-09-08', '2024-09-10', '2024-09-15'],
    datasets: [
      {
        label: 'Participation Over Time',
        data: [1, 2, 2, 3, 5],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  };

  // Participant Count Summary
  const participantCount = filteredData.length;

  return (
    <div className="container">
      <h1 className="heading">Student Participation Reports</h1>

      {/* Search Bar */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by event name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Date Range Filter */}
      <div className="date-range-container">
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="date-input"
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="date-input"
          />
        </label>
      </div>

      {/* Participant Count Summary */}
      <div className="summary">
        <h2>Total Participants: {participantCount}</h2>
      </div>

      {/* Data Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Club/Lab</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.rollNo}</td>
              <td>{item.clubLab}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Export Buttons */}
      <div className="button-container">
        <button onClick={exportToPDF} className="button">Export to PDF</button>
        <button onClick={exportToExcel} className="button">Export to Excel</button>
      </div>

      {/* Charts Section */}
      <div className="statistics-section">
        <h2>Event Participation Statistics</h2>

        {/* Bar Chart */}
        <div className="chart-container">
          <Bar data={eventBarChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>

        {/* Pie Chart */}
        <h2>Club vs Lab Participation</h2>
        <div className="chart-container">
          <Pie data={clubLabPieChartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>

        {/* Line Chart */}
        <h2>Participation Over Time</h2>
        <div className="chart-container">
          <Line data={participationOverTimeData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
