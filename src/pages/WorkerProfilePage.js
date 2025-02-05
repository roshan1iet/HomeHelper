import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function WorkerProfilePage() {
  const location = useLocation();
  const workerData = location.state?.workerData || {};

  return (
    <Container style={{  fontFamily: 'Arial, sans-serif', maxWidth: '1200px', backgroundColor: '#f4f7f6', borderRadius: '10px' }}>
      <Row>
        {/* Left Section - Worker Details */}
        <Col md={4} style={{ textAlign: 'left', padding: '30px', borderRight: '2px solid #ddd', backgroundColor: '#ffffff', borderRadius: '10px' }}>
          <h1>MY PROFILE</h1>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            
            <img 
              src={workerData.photo ? URL.createObjectURL(workerData.photo) : 'default-avatar.png'} 
              alt="Profile" 
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px', border: '3px solid #007bff' }}
            />
            <h3 style={{ color: '#007bff', fontWeight: '600' }}>{workerData.name}</h3>
          </div>
          <p><strong>Experience:</strong> {workerData.experienceValue} {workerData.experienceType}</p>
          <p><strong>Skills:</strong> {workerData.skills?.join(', ') || 'Not provided'}</p>
          <p><strong>Languages:</strong> {workerData.languages || 'Not specified'}</p>
          <p><strong>Availability:</strong> {workerData.availability || 'Not specified'}</p>
          <p><strong>Mobile:</strong> {workerData.mobile || 'Not provided'}</p>
          <Button variant="primary" style={{ width: '100%', marginTop: '20px', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', borderColor: '#007bff' }}>Edit Profile</Button>
        </Col>

        {/* Right Section - Ratings, Feedback, Bookings */}
        <Col md={8} style={{ padding: '20px' }}>
          <div style={{ marginBottom: '30px', padding: '25px', background: 'linear-gradient(145deg, #e1f5fe, #ffffff)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ color: '#007bff' }}>My Ratings</h4>
            <ProgressBar now={80} label={`4.0 / 5`} variant="success" style={{ height: '20px', borderRadius: '10px' }} />
          </div>
          
          <div style={{ marginBottom: '30px', padding: '25px', background: 'linear-gradient(145deg, #e1f5fe, #ffffff)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ color: '#007bff' }}>Feedback for Me</h4>
            <p style={{ fontStyle: 'italic', color: '#555' }}>"Great service! Highly recommended."</p>
            <p style={{ fontStyle: 'italic', color: '#555' }}>"Very punctual and hardworking!"</p>
          </div>

          <div style={{ padding: '25px', background: 'linear-gradient(145deg, #e1f5fe, #ffffff)', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h4 style={{ color: '#007bff' }}>My Bookings</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}>🗓️ Cleaning - Scheduled for Feb 10, 2025</li>
              <li style={{ marginBottom: '10px', color: '#28a745' }}>✅ Babysitting - Completed on Jan 30, 2025</li>
              <li style={{ marginBottom: '10px' }}>🔜 Gardening - Upcoming on Feb 15, 2025</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkerProfilePage;
