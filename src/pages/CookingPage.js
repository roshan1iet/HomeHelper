import React from 'react';
import './ServicePage.css';
import { useNavigate } from 'react-router-dom';

// Import images from assets folder
import worker6 from '../assets/worker6.jpg';
import worker7 from '../assets/worker7.jpg';
import worker8 from '../assets/worker8.jpg';
import worker9 from '../assets/worker9.jpg';
import worker10 from '../assets/worker10.jpg';

const CookingPage = () => {
    const navigate = useNavigate(); 

    // Update the worker objects to use the imported images
    const workers = [
        { name: "Alice Brown", gender: "Female", experience: "7 years", location: "Delhi", salary: "₹350 / hour", img: worker6 },
        { name: "Tom Harris", gender: "Male", experience: "3 years", location: "Mumbai", salary: "₹320 / hour", img: worker7 },
        { name: "Emma White", gender: "Female", experience: "5 years", location: "Bangalore", salary: "₹380 / hour", img: worker8 },
        { name: "Chris Lee", gender: "Male", experience: "4 years", location: "Chennai", salary: "₹310 / hour", img: worker9 },
        { name: "Olivia Martin", gender: "Female", experience: "6 years", location: "Kolkata", salary: "₹400 / hour", img: worker10 }
    ];
    return (
        <section className="service-page">
            <br /><br /><h2>Available Cooking Experts</h2><br /><br />
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

export default CookingPage;
