import React from 'react';
import { Box, Container, Grid, Paper, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className='container'>
      <Box>
        <Typography variant="h4" sx={{ marginBottom: "20px" }} gutterBottom>
          Admin Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Manage Students Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: "#333" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Manage Students</Typography>
              <Typography sx={{ color: "white" }}>View and manage all registered students.</Typography>
              <Button variant="contained" component={Link} to="/manage-students" sx={{ mt: 2 }}>
                Go to Manage Students
              </Button>
            </Paper>
          </Grid>

          {/* Manage Clubs & Labs Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: "#333" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Manage Clubs/Labs</Typography>
              <Typography sx={{ color: "white" }}>Manage and update clubs and labs here.</Typography>
              <Button variant="contained" component={Link} to="/manage-clubs-labs" sx={{ mt: 2 }}>
                Go to Clubs/Labs
              </Button>
            </Paper>
          </Grid>

          {/* View Student Applications Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: "#333" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Student Applications</Typography>
              <Typography sx={{ color: "white" }}>View pending applications from students.</Typography>
              <Button variant="contained" component={Link} to="/student-applications" sx={{ mt: 2 }}>
                View Applications
              </Button>
            </Paper>
          </Grid>

          {/* Upload Achievements Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: "#333" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Achievements Upload</Typography>
              <Typography sx={{ color: "white" }}>Upload achievements for clubs and labs.</Typography>
              <Button variant="contained" component={Link} to="/achievements-uploads" sx={{ mt: 2 }}>
                Upload Achievements
              </Button>
            </Paper>
          </Grid>

          {/* Attendance Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: "#333" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Attendance</Typography>
              <Typography sx={{ color: "white" }}>Mark The Attendance Here</Typography>
              <Button variant="contained" component={Link} to="/attendance" sx={{ mt: 2 }}>
                Click Here To Take Attendance
              </Button>
            </Paper>
          </Grid>

          {/* Reports Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: "#333" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Reports</Typography>
              <Typography sx={{ color: "white" }}>View overall reports of student activities.</Typography>
              <Button variant="contained" component={Link} to="/reports" sx={{ mt: 2 }}>
                View Reports
              </Button>
            </Paper>
          </Grid>

          {/* Upload Upcoming Events Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', backgroundColor: "#333" }}>
              <Typography variant="h6" sx={{ color: "white" }}>Upcoming Events</Typography>
              <Typography sx={{ color: "white" }}>Upload details of upcoming events.</Typography>
              <Button variant="contained" component={Link} to="/upcoming-events" sx={{ mt: 2 }}>
                Upload Events
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AdminDashboard;
