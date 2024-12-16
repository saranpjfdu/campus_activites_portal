import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './AchivementsUpload.css';

const AchievementsUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null); // New state for image upload
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Handle image file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate upload process
    if (title && description && date && category && file && image) {
      // Here, you can implement the upload logic (e.g., API call)
      setUploadMessage('Achievement and image uploaded successfully!');
      // Reset form fields
      setTitle('');
      setDescription('');
      setDate('');
      setCategory('');
      setFile(null);
      setImage(null);
    } else {
      setUploadMessage('Please fill all fields and select both files.');
    }
  };

  return (
    <div className="achievements-upload-container">
      <h2>Upload Achievements</h2>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          className="input-field"
          variant="filled" /* Using filled variant for better UX */
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
          className="input-field"
          variant="filled"
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          className="input-field"
          InputLabelProps={{ shrink: true }} /* Keeps label visible */
          variant="filled"
        />
        <FormControl fullWidth className="input-field" variant="filled">
          <InputLabel>Select Club/Lab</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {/* Add more menu items as needed */}
            <MenuItem value="Faculty Recreation Club">Faculty Recreation Club</MenuItem>
            <MenuItem value="Electoral Literacy Club">Electoral Literacy Club</MenuItem>
            <MenuItem value="Entrepreneurship Club">Entrepreneurship Club</MenuItem>
            <MenuItem value="Community Service Club">Community Service Club</MenuItem>
            <MenuItem value="Code Circle">Code Circle</MenuItem>
            <MenuItem value="Bureau Of Overseas Education">Bureau Of Overseas Education</MenuItem>
            <MenuItem value="Sensors and Tamil Computing">Sensors and Tamil Computing</MenuItem>
            <MenuItem value="Aquatech Innovation">Aquatech Innovation</MenuItem>
            <MenuItem value="Hackathon">Hackathon</MenuItem>
            <MenuItem value="AI Based Industrial Automation">AI Based Industrial Automation</MenuItem>
            <MenuItem value="Robotics & Automation">Robotics & Automation</MenuItem>
            <MenuItem value="Manufacturing & Fabrication Cell">Manufacturing & Fabrication Cell</MenuItem>
          </Select>
        </FormControl>
        <input
          type="file"
          onChange={handleFileChange}
          className="file-input"
          accept=".pdf" // You can specify allowed file types here
        />
        <input
          type="file"
          onChange={handleImageChange}
          className="file-input"
          accept="image/*" // Accepting only image files
        />
        <Button type="submit" variant="contained" className="upload-button">
          Upload Achievement
        </Button>
      </form>
      {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
    </div>
  );
};

export default AchievementsUpload;
