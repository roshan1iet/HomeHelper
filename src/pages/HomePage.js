import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import Sweeping from '../assets/sweeping.jpg';
import Cooking from '../assets/cooking.jpg';
import Gardening from '../assets/gardening.jpg';
import Babysitting from '../assets/babysitting.jpg';
import nurse from '../assets/nurse.jpg';
import PetCare from '../assets/petcare.jpg';

import hero3 from '../assets/hero3.jpg';
import './Home.css'; // Ensure you create a CSS file for styling

const HomePage = () => {
    const navigate = useNavigate();

    // Testimonials Data
    const testimonials = [
        { name: "Santosh J.", message: "Home Helper has transformed my home! The Sweeping service is top-notch and very reliable." },
        { name: "Rakshit T.", message: "The babysitting service was a lifesaver for our family. Our kids loved their sitter!" },
        { name: "Sunita R.", message: "I can't recommend the gardening service enough! My yard has never looked better." },
        { name: "Ashutosh D.", message: "The patient care team was incredibly compassionate and attentive to my mother's needs." },
        { name: "Kailash M.", message: "The cooking service has made my life so much easier. Delicious meals every day!" }
    ];

    // Services Data
    const services = [
        { id: "sweeping", img: Sweeping, title: "Sweeping", desc: "Professional Sweeping services for your home or office, ensuring a spotless environment." },
        { id: "cooking", img: Cooking, title: "Cooking", desc: "Delicious home-cooked meals prepared by experienced chefs tailored to your dietary needs." },
        { id: "gardening", img: Gardening, title: "Gardening", desc: "Expert gardening services to maintain and beautify your outdoor spaces." },
        { id: "babysitting", img: Babysitting, title: "Babysitting", desc: "Reliable babysitting services with trained caregivers to ensure your child's safety and happiness." },
        { id: "patient-care", img: nurse, title: "Patient Care", desc: "Compassionate patient care services for the elderly or those in need of assistance at home." },
        { id: "pet-care", img: PetCare, title: "Pet Care", desc: "Professional pet care services including walking, grooming, and sitting for your furry friends." }
    ];

    // State for testimonials
    const [index, setIndex] = useState(0);
    const handleNext = () => setIndex((index + 1) % testimonials.length);
    const handlePrev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <div className="hero-section" style={{ backgroundImage: `url(${hero3})` }}>
                <div className="hero-content">
                    <h1>A clean home is a sanctuary for the soul.</h1>
                    <button className="hero-button" onClick={() => navigate("/bookingPage")}>Book Now</button>
                </div>
            </div>

            {/* Services Section */}
            <section id="Services" className="services-section"><br></br><br></br><br></br>
                <h2 style={{ textAlign: 'center', color: '#fff' }}>Our Services</h2>
                <div className="services-container">
                    {services.map((service) => (
                        <div className="service-card" key={service.id}>
                            <img 
                                src={service.img} 
                                alt={service.title} 
                                className="service-image"
                            />
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <button
                                className="explore-button"
                                onClick={() => navigate(`/${service.id}`)}>Explore</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials">
            <br></br><br></br>
                <h2>What Our Clients Say</h2>
                <div className="testimonial-card">
                    <strong>{testimonials[index].name}</strong>
                    <p>{testimonials[index].message}</p>
                </div>
                <div className="navigation-buttons">
    <button onClick={handlePrev} className="nav-btn">«</button>
    <button onClick={handleNext} className="nav-btn">»</button>
</div>
            </section>

            {/* About Us Section */}
            <section id="about-us" className="about-us">
            <br></br><br></br><h2 style={{ textAlign: 'center' }}>About Us</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                    Welcome to Home Helper, your trusted partner in maintaining a happy and organized household. 
                    From professional cleaning to compassionate patient care, our services are designed to meet your daily needs with reliability and excellence.
                    Experience a stress-free life with our tailored solutions for every home.
                </p><br></br><br></br><br></br>
            </section>
        </div>
    );
};

export default HomePage;
