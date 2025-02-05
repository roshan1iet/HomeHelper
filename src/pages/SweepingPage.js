import React from 'react';
import './ServicePage.css';
import { useNavigate } from 'react-router-dom';

// Import images correctly
import sweeper1 from '../assets/sweeper1.jpg';
import sweeper2 from '../assets/sweeper2.jpg';
import sweeper3 from '../assets/sweeper3.jpg';
import sweeper4 from '../assets/sweeper4.jpg';
import sweeper5 from '../assets/sweeper5.jpg';

const SweepingPage = () => {
    const navigate = useNavigate(); 

    // Use imported image variables instead of string names
    const workers = [
        { name: "John Doe", gender: "Male", experience: "5 years", location: "Delhi", salary: "₹450 / hour", img: sweeper1 },
        { name: "Jane Smith", gender: "Female", experience: "3 years", location: "Mumbai", salary: "₹460 / hour", img: sweeper2 },
        { name: "Mike Johnson", gender: "Male", experience: "4 years", location: "Bangalore", salary: "₹470 / hour", img: sweeper3 },
        { name: "Emily Davis", gender: "Female", experience: "2 years", location: "Chennai", salary: "₹440 / hour", img: sweeper4 },
        { name: "Robert Wilson", gender: "Male", experience: "6 years", location: "Kolkata", salary: "₹500 / hour", img: sweeper5 }
    ];
    
    return (
        <section className="service-page">
            <br /><br /><h2>Available Sweeping Experts</h2><br /><br />
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

            {/* BOOK NOW Button */}
            <div className="book-now-container">
                <button className="book-now-button" onClick={() => navigate('/booking')}>
                    Book Now
                </button><br /><br /><br />
            </div>
        </section>
    );
};

export default SweepingPage;
