import React, { useState, useEffect } from 'react';
import './ManageStudents.css';

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [newStudent, setNewStudent] = useState({
    name: '',
    rollNumber: '',
    department: '',
    club: '',
    lab: '',
    active: true, // Added active field
  });

  useEffect(() => {
    // Mock fetch function for students (replace with actual API call)
    const fetchStudents = async () => {
      const data = [
        { id: 1, name: 'Gokul', rollNumber: '7376222IT140', department: 'IT', club: 'Robotics', lab: 'NIL', active: true },
        { id: 2, name: 'Lingesh', rollNumber: '7376222IT180', department: 'IT', club: 'NIL', lab: 'Aquatech Innovation', active: false },
        { id: 3, name: 'Keerthivasan', rollNumber: '7376222AD155', department: 'AIDS', club: 'leo', lab: 'AI Lab', active: true },
        { id: 2, name: 'Saran', rollNumber: '7376222IT251', department: 'IT', club: 'Bureau of Overseas Education', lab: 'AI Lab', active: true },
        { id: 2, name: 'Nagarathinam', rollNumber: '7376222FD137', department: 'FD', club: 'Community Service Club', lab: 'Embedded Technology', active: false },
      ];
      setStudents(data);
    };
    fetchStudents();
  }, []);

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleAddStudent = () => {
    if (newStudent.club === '' && newStudent.lab === '') {
      alert('Please fill either the Club or Lab field.');
      return;
    }

    if (editMode) {
      const updatedStudents = students.map(student =>
        student.id === selectedStudent.id ? { ...newStudent, id: selectedStudent.id } : student
      );
      setStudents(updatedStudents);
      setEditMode(false);
      setSelectedStudent(null);
    } else {
      const updatedStudents = [...students, { ...newStudent, id: students.length + 1 }];
      setStudents(updatedStudents);
    }

    setNewStudent({ name: '', rollNumber: '', department: '', club: '', lab: '', active: true });
    setShowForm(false);
  };

  const handleEditStudent = (student) => {
    setNewStudent(student);
    setSelectedStudent(student);
    setEditMode(true);
    setShowForm(true);
  };

  const handleDeleteStudent = (studentId) => {
    setStudents(students.filter(student => student.id !== studentId));
  };

  const handleToggleActive = (studentId) => {
    setStudents(students.map(student =>
      student.id === studentId ? { ...student, active: !student.active } : student
    ));
  };

  return (
    <div className="manage-students-container">
      <h1 className="manage-students-header">Manage Students</h1>

      <button className="toggle-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add New Student'}
      </button>

      {showForm && (
        <div className="student-form">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            value={newStudent.rollNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={newStudent.department}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="club"
            placeholder="Club (optional)"
            value={newStudent.club}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lab"
            placeholder="Lab (optional)"
            value={newStudent.lab}
            onChange={handleInputChange}
          />
          <label>
            Active:
            <input
              type="checkbox"
              name="active"
              checked={newStudent.active}
              onChange={(e) => setNewStudent({ ...newStudent, active: e.target.checked })}
            />
          </label>

          <button className="submit-btn" onClick={handleAddStudent}>
            {editMode ? 'Update Student' : 'Add Student'}
          </button>
        </div>
      )}

      <StudentTable
        students={students}
        onEditStudent={handleEditStudent}
        onDeleteStudent={handleDeleteStudent}
        onToggleActive={handleToggleActive}
      />
    </div>
  );
};

const StudentTable = ({ students, onEditStudent, onDeleteStudent, onToggleActive }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="student-table-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or roll number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Department</th>
            <th>Club</th>
            <th>Lab</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.department}</td>
              <td>{student.club}</td>
              <td>{student.lab}</td>
              <td>
                <input
                  type="checkbox"
                  checked={student.active}
                  onChange={() => onToggleActive(student.id)}
                />
              </td>
              <td className="table-buttons">
                <button className="edit-button" onClick={() => onEditStudent(student)}>Edit</button>
                <button className="delete-button" onClick={() => onDeleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStudents;
