import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, TextField, Button, Checkbox, Box, Typography } from '@mui/material';
import './StudentTable.css'
const initialStudents = [
  { id: 1, name: 'John Doe', email: 'john@example.com', department: 'ECE', lab: 'Lab A', activeLab: true, club: 'Club A', activeClub: true },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', department: 'CSE', lab: 'Lab B', activeLab: false, club: 'Club B', activeClub: false },
];

const StudentTable = () => {
  const [students, setStudents] = useState(initialStudents);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedStudent, setEditedStudent] = useState({});
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    department: '',
    lab: '',
    activeLab: false,
    club: '',
    activeClub: false
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedStudent(students[index]);
  };

  const handleSave = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index] = editedStudent;
    setStudents(updatedStudents);
    setEditIndex(-1);
  };

  const handleChange = (e, field) => {
    setEditedStudent({
      ...editedStudent,
      [field]: e.target.value
    });
  };

  const handleCheckboxChange = (e, field) => {
    setEditedStudent({
      ...editedStudent,
      [field]: e.target.checked,
    });
  };

  const handleNewStudentChange = (e, field) => {
    setNewStudent({
      ...newStudent,
      [field]: e.target.value
    });
  };

  const handleNewStudentCheckboxChange = (e, field) => {
    setNewStudent({
      ...newStudent,
      [field]: e.target.checked,
    });
  };

  const handleAddStudent = () => {
    if (newStudent.name && newStudent.email) {
      setStudents([...students, { ...newStudent, id: students.length + 1 }]);
      setNewStudent({
        name: '',
        email: '',
        department: '',
        lab: '',
        activeLab: false,
        club: '',
        activeClub: false
      });
    } else {
      alert('Please fill in the name and email.');
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" gutterBottom>Student Table</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Lab</TableCell>
            <TableCell>Active in Lab</TableCell>
            <TableCell>Club</TableCell>
            <TableCell>Active in Club</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={student.id}>
              {editIndex === index ? (
                <>
                  <TableCell>
                    <TextField
                      value={editedStudent.name}
                      onChange={(e) => handleChange(e, 'name')}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={editedStudent.email}
                      onChange={(e) => handleChange(e, 'email')}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={editedStudent.department}
                      onChange={(e) => handleChange(e, 'department')}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={editedStudent.lab}
                      onChange={(e) => handleChange(e, 'lab')}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={editedStudent.activeLab}
                      onChange={(e) => handleCheckboxChange(e, 'activeLab')}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={editedStudent.club}
                      onChange={(e) => handleChange(e, 'club')}
                      fullWidth
                    />
                  </TableCell>
                  <TableCell>
                    <Checkbox
                      checked={editedStudent.activeClub}
                      onChange={(e) => handleCheckboxChange(e, 'activeClub')}
                    />
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" onClick={() => handleSave(index)}>
                      Save
                    </Button>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.department}</TableCell>
                  <TableCell>{student.lab}</TableCell>
                  <TableCell>{student.activeLab ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{student.club}</TableCell>
                  <TableCell>{student.activeClub ? 'Yes' : 'No'}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box sx={{ marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom>Add New Student</Typography>
        <TextField
          label="Name"
          value={newStudent.name}
          onChange={(e) => handleNewStudentChange(e, 'name')}
          sx={{ marginRight: '10px', marginBottom: '10px' }}
        />
        <TextField
          label="Email"
          value={newStudent.email}
          onChange={(e) => handleNewStudentChange(e, 'email')}
          sx={{ marginRight: '10px', marginBottom: '10px' }}
        />
        <TextField
          label="Department"
          value={newStudent.department}
          onChange={(e) => handleNewStudentChange(e, 'department')}
          sx={{ marginRight: '10px', marginBottom: '10px' }}
        />
        <TextField
          label="Lab"
          value={newStudent.lab}
          onChange={(e) => handleNewStudentChange(e, 'lab')}
          sx={{ marginRight: '10px', marginBottom: '10px' }}
        />
        <Checkbox
          checked={newStudent.activeLab}
          onChange={(e) => handleNewStudentCheckboxChange(e, 'activeLab')}
        />
        <label>Active in Lab</label>
        <TextField
          label="Club"
          value={newStudent.club}
          onChange={(e) => handleNewStudentChange(e, 'club')}
          sx={{ marginRight: '10px', marginBottom: '10px' }}
        />
        <Checkbox
          checked={newStudent.activeClub}
          onChange={(e) => handleNewStudentCheckboxChange(e, 'activeClub')}
        />
        <label>Active in Club</label>
        <Button variant="contained" sx={{ marginTop: '10px' }} onClick={handleAddStudent}>
          Add Student
        </Button>
      </Box>
    </Box>
  );
};

export default StudentTable;
