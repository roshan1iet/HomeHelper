
// import React, { useState } from 'react';
// import validator from 'validator';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// //import { Link } from 'react-router-dom';
// import './LoginUser.css';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [validationMessage, setValidationMessage] = useState("");
//   const [messageColor, setMessageColor] = useState("black");
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const validatePassword = (value) => {
//     if (validator.isStrongPassword(value, {
//       minLength: 8,
//       minLowercase: 1,
//       minUppercase: 1,
//       minNumbers: 1,
//       minSymbols: 1
//     })) {
//       setValidationMessage("Password is Strong!");
//       setMessageColor("green");
//     } else {
//       setValidationMessage("Please use a mix of uppercase, lowercase letters, numbers, and symbols.");
//       setMessageColor("red");
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     validatePassword(password);
//     if (validator.isStrongPassword(password)) {
//       console.log('Email:', email);
//       console.log('Password:', password);
//       // After successful login, redirect to the role selection page
//       navigate('/role-selection');
//     } else {
//       console.log('Password is not strong enough.');
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md="4">
//           <h2>Login</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   validatePassword(e.target.value);
//                 }}
//               />
//               <p style={{ color: messageColor }}>{validationMessage}</p>
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//           </Form>
//           <p className="mt-3">
//             Don't have an account? <a href="/register">Register here</a>
//           </p>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;
