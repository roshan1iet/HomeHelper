
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import './WorkerRegistrationForm.css';

function WorkerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    photo: null,
    experienceType: 'months',
    experienceValue: '',
    skills: [],
    languages: '',
    otherLanguage: '',
    availability: '',
    mobile: '',
    identityProof: null,
    identityNumberType: '',
    identityNumber: '',
    gender: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    photo: '',
    experienceValue: '',
    skills: '',
    languages: '',
    mobile: '',
    identityProof: '',
    identityNumber: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on input change
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFormData({ ...formData, [name]: file });
    setErrors({ ...errors, [name]: '' }); // Clear error on file input change
  };

  const handleSkillsChange = (e) => {
    const selectedSkills = Array.from(e.target.selectedOptions, option => option.value);
    setFormData({ ...formData, skills: selectedSkills });
    setErrors({ ...errors, skills: '' }); // Clear error on skill selection
  };

  const validateForm = () => {

    let formErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
    }

    // Photo validation
    if (!formData.photo) {
      formErrors.photo = 'Photo is required';
    }

    // Experience validation
    if (!formData.experienceValue) {
      formErrors.experienceValue = 'Experience is required';
      // setMessageColor("red");
    }

    // Skills validation
    if (formData.skills.length === 0) {
      formErrors.skills = 'At least one skill is required';
    }

    // Languages validation
    if (!formData.languages) {
      formErrors.languages = 'Language selection is required';
    }

    // Mobile validation (basic phone number validation)
    const mobilePattern = /^[0-9]{10}$/;
    if (!formData.mobile || !mobilePattern.test(formData.mobile)) {
      formErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.identityProof) {
      formErrors.identityProof = "Identity proof is required";
    } else if (formData.identityProof.size > 2 * 1024 * 1024) { // 2MB limit
      formErrors.identityProof = "File size must be less than 2MB";
    } else if (!["image/jpeg", "image/png", "application/pdf"].includes(formData.identityProof.type)) {
      formErrors.identityProof = "Only PDF, JPG, and PNG files are allowed";
    }
  
    // Identity Number Validation (Alphanumeric)
    if (!formData.identityNumber) {
      formErrors.identityNumber = "Identity number is required";
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.identityNumber)) {
      formErrors.identityNumber = "Identity number must be alphanumeric (no special characters)";
    }
  
  

    // Gender validation
    if (!formData.gender) {
      formErrors.gender = 'Gender selection is required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0; // If no errors, return true
    // setMessageColor("red");
  };

const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/worker-profile', { state: { workerData: formData } });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Worker Registration</h2>
          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Photo Upload */}
            <Form.Group controlId="formPhoto">
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="file"
                name="photo"
                onChange={handleFileChange}
                isInvalid={errors.photo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.photo}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Experience Field */}
            <Form.Group controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control
                as="select"
                name="experienceType"
                value={formData.experienceType}
                onChange={handleChange}
              >
                <option value="months">Months</option>
                <option value="years">Years</option>
              </Form.Control>
              <Form.Control
                type="number"
                placeholder={`Enter your experience in ${formData.experienceType}`}
                name="experienceValue"
                value={formData.experienceValue}
                onChange={handleChange}
                isInvalid={errors.experienceValue}
              />
              <Form.Control.Feedback type="invalid">
                {errors.experienceValue}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Skills Field */}
            <Form.Group controlId="formSkills">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                as="select"
                multiple
                name="skills"
                value={formData.skills}
                onChange={handleSkillsChange}
                isInvalid={errors.skills}
              >
                <option value="Cleaning">Cleaning</option>
                <option value="Cooking">Cooking</option>
                <option value="Gardening">Gardening</option>
                <option value="Babysitting">Babysitting</option>
                <option value="Patient Care">Patient Care</option>
                <option value="Pet Care">Pet Care</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.skills}
              </Form.Control.Feedback>
              <p>Selected Skills: {formData.skills.join(', ')}</p>
            </Form.Group>

            {/* Languages Field */}
            <Form.Group controlId="formLanguages">
              <Form.Label>Languages</Form.Label>
              <Form.Control
                as="select"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                isInvalid={errors.languages}
              >
                <option value="">Select your language</option>
                <option value="English">English</option>
                <option value="Marathi">Marathi</option>
                <option value="Hindi">Hindi</option>
                <option value="Other">Other</option>
              </Form.Control>
              {formData.languages === 'Other' && (
                <Form.Control
                  type="text"
                  placeholder="Specify other language"
                  name="otherLanguage"
                  value={formData.otherLanguage}
                  onChange={handleChange}
                />
              )}
              <Form.Control.Feedback type="invalid">
                {errors.languages}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Availability Field */}
            <Form.Group controlId="formAvailability">
              <Form.Label>Availability</Form.Label>
              <Form.Control
                as="select"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
              >
                <option value="">Select your availability</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </Form.Control>
            </Form.Group>

            {/* Mobile Number Field */}
            <Form.Group controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                isInvalid={errors.mobile}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mobile}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Identity Proof Field */}
            <Form.Group controlId="formIdentityProof">
              <Form.Label>Identity Proof</Form.Label>
              <Form.Control
                type="file"
                name="identityProof"
                onChange={handleFileChange}
                isInvalid={errors.identityProof}
              />
              <Form.Control.Feedback type="invalid">
                {errors.identityProof}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Identity Number Field */}
            <Form.Group controlId="formIdentityNumber">
              <Form.Label>Identity Number</Form.Label>
              <Form.Control
                as="select"
                name="identityNumberType"
                value={formData.identityNumberType}
                onChange={handleChange}
              >
                <option value="">Select identity type</option>
                <option value="Aadhar">Aadhar Card No</option>
                <option value="Pan">Pan Card No</option>
              </Form.Control>
              <Form.Control
                type="text"
                placeholder="Enter your identity number"
                name="identityNumber"
                value={formData.identityNumber}
                onChange={handleChange}
                isInvalid={errors.identityNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.identityNumber}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Gender Field */}
            <Form.Group controlId="formGender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                isInvalid={errors.gender}
              >
                <option value="">Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.gender}
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkerRegistrationForm;