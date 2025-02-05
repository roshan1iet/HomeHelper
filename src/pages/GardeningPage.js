import React from 'react';
import './ServicePage.css';
import { useNavigate } from 'react-router-dom';

// Import images from the assets folder
import gardener1 from '../assets/gardener1.jpg';
import gardener2 from '../assets/gardener2.jpg';
import gardener3 from '../assets/gardener3.jpg';
import gardener4 from '../assets/gardener4.jpg';
import gardener5 from '../assets/gardener5.jpg';

const GardeningPage = () => {
    const navigate = useNavigate(); 

    // Update the workers array to use the imported images
    const workers = [
        { name: "Jake Wilson", gender: "Male", experience: "8 years", location: "Delhi", salary: "₹250 / hour", img: gardener1 },
        { name: "Sophia Green", gender: "Female", experience: "5 years", location: "Mumbai", salary: "₹200 / hour", img: gardener2 },
        { name: "Daniel Flores", gender: "Male", experience: "6 years", location: "Bangalore", salary: "₹230 / hour", img: gardener3 },
        { name: "Olivia James", gender: "Female", experience: "4 years", location: "Chennai", salary: "₹220 / hour", img: gardener4 },
        { name: "Henry Clark", gender: "Male", experience: "7 years", location: "Kolkata", salary: "₹280 / hour", img: gardener5 }
    ];

    return (
        <section className="service-page">
            <h2>Available Gardeners</h2>
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

export default GardeningPage;
