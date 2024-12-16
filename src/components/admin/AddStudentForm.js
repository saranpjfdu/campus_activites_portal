// src/components/admin/AddStudentForm.js
import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [lab, setLab] = useState('');
  const [club, setClub] = useState('');
  const [active, setActive] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Math.floor(Math.random() * 10000), // Random ID, replace with actual logic
      name,
      rollNumber,
      department,
      club,
      active,
    };
    onAddStudent(newStudent);
    setName('');
    setRollNumber('');
    setDepartment('');
    setClub('');
    setActive(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Roll Number:</label>
        <input 
          type="text" 
          value={rollNumber} 
          onChange={(e) => setRollNumber(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Department:</label>
        <input 
          type="text" 
          value={department} 
          onChange={(e) => setDepartment(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Lab:</label>
        <input 
          type="text" 
          value={lab} 
          onChange={(e) => setLab(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Club:</label>
        <input 
          type="text" 
          value={club} 
          onChange={(e) => setClub(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Active:</label>
        <input 
          type="checkbox" 
          checked={active} 
          onChange={() => setActive(!active)} 
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
