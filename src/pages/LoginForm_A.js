import React, { useState } from 'react';
import validator from 'validator';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './LoginForm_A.css'; // Import the CSS file

function LoginA() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');
  const navigate = useNavigate();

  const validatePassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setValidationMessage('Password is Strong!');
      setMessageColor('green');
    } else {
      setValidationMessage(
        'Please use a mix of uppercase, lowercase letters, numbers, and symbols.'
      );
      setMessageColor('red');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator.isStrongPassword(password)) {
      console.log('Email:', email);
      console.log('Password:', password);
      // Redirect to role selection page after successful login
      navigate('/role-selection');
    } else {
      console.log('Password is not strong enough.');
    }
  };

  return (
    <div className="login-container">
      <Row className="justify-content-center">
        <Col md="6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Admin Login</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validatePassword(e.target.value);
                  }}
                  required
                />
                <p className="validation-message mt-2" style={{ color: messageColor }}>
                  {validationMessage}
                </p>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Login
              </Button>
            </Form>
            {/* <p className="text-center mt-3">
              Don't have an account?{' '}
              <Link to="/RegistrationForm" className="text-decoration-none">
                Register Here
              </Link>
            </p> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default LoginA;