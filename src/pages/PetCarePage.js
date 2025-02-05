import React from 'react';
import './ServicePage.css';
import { useNavigate } from 'react-router-dom';

// Import images from the assets folder
import petcare1 from '../assets/petcare1.jpg';
import petcare2 from '../assets/petcare2.jpg';
import petcare3 from '../assets/petcare3.jpg';
import petcare4 from '../assets/petcare4.jpg';
import petcare5 from '../assets/petcare5.jpg';

const PetCarePage = () => {
    const navigate = useNavigate(); // Initialize navigation

    // Update the workers array to use the imported images
    const workers = [
        { name: "Emily Johnson", gender: "Female", experience: "5 years", location: "Delhi", salary: "₹250 / hour", img: petcare1 },
        { name: "Mark Simmons", gender: "Male", experience: "3 years", location: "Mumbai", salary: "₹300 / hour", img: petcare2 },
        { name: "Sarah White", gender: "Female", experience: "6 years", location: "Bangalore", salary: "₹280 / hour", img: petcare3 },
        { name: "Daniel Lee", gender: "Male", experience: "4 years", location: "Chennai", salary: "₹260 / hour", img: petcare4 },
        { name: "Sophia Collins", gender: "Female", experience: "7 years", location: "Kolkata", salary: "₹320 / hour", img: petcare5 }
    ];

    return (
        <section className="service-page">
            <h2>Available Pet Care Professionals</h2>
            <div className="worker-list">
                {workers.map((worker, index) => (
                    <div className="worker-card" key={index}>
                        <img src={worker.img} alt={worker.name} />
                        <h3>{worker.name}</h3>
                        <p>Gender: {worker.gender}</p>
                        <p>Experience: {worker.experience}</p>
                    </div>
                ))}
            </div>
            <br />
            <div className="book-now-container">
                <button className="book-now-button" onClick={() => navigate('/booking')}>
                    Book Now
                </button><br /><br /><br />
            </div>
            <br />
        </section>
    );
};

export default PetCarePage;
