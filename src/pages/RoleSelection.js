import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function RoleSelection() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === 'User') {
      navigate('/register'); // Correctly route to User Registration
    } else if (role === 'Worker') {
      navigate('/worker-register'); // Correctly route to Worker Registration
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6" className="text-center">
          <h2>Select Role</h2>
          <p>Choose your role:</p>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-primary"
              className="me-3 p-3"
              onClick={() => handleRoleSelection('User')}
              style={{
                backgroundColor: '#4578',
                color: '#fff',
                fontSize: '18px',
                padding: '30px 30px',
                width: '120px',
                transition: 'transform 0.2s ease-in-out',
                
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              User
            </Button>
            
            
            <Button
              variant="outline-secondary"
		className="e-3 p-3"
              onClick={() => handleRoleSelection('Worker')}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                fontSize: '18px',
                padding: '30px 30px',
                width: '120px',
                transition: 'transform 0.2s ease-in-out',
                
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              Worker
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RoleSelection;
