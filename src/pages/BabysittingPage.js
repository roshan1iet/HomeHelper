import React from 'react';
import './ServicePage.css';
import { useNavigate } from 'react-router-dom';
// Import images directly
import babysitter1 from '../assets/babysitter1.jpg';
import babysitter2 from '../assets/babysitter2.jpg';
import babysitter3 from '../assets/babysitter3.jpg';
import babysitter4 from '../assets/babysitter4.jpg';
import babysitter5 from '../assets/babysitter5.jpg';

const BabysittingPage = () => {
    const navigate = useNavigate(); 
    const workers = [
        { name: "Lily Carter", gender: "Female", experience: "6 years", location: "Delhi", salary: "₹670 / hour", img: babysitter1 },
        { name: "James Anderson", gender: "Male", experience: "4 years", location: "Mumbai", salary: "₹720 / hour", img: babysitter2 },
        { name: "Sophie Turner", gender: "Female", experience: "5 years", location: "Bangalore", salary: "₹730 / hour", img: babysitter3 },
        { name: "Ethan Brown", gender: "Male", experience: "3 years", location: "Chennai", salary: "₹700 / hour", img: babysitter4 },
        { name: "Charlotte Evans", gender: "Female", experience: "7 years", location: "Kolkata", salary: "₹690 / hour", img: babysitter5 }
    ];
    

    return (
        <section className="service-page">
            <br /><h2>Available Babysitters</h2><br /><br /><br />
            <div className="worker-list">
                {workers.map((worker, index) => (
                    <div className="worker-card" key={index}>
                        <img src={worker.img} alt={worker.name} />
                        <h3>{worker.name}</h3>
                        <p>Gender: {worker.gender}</p>
                        <p>Experience: {worker.experience}</p>
                    </div>
                ))}
            </div><br></br>
            <div className="book-now-container">
                <button className="book-now-button" onClick={() => navigate('/booking')}>
                    Book Now
                </button><br /><br />
            </div><br></br>
        </section>
    );
};

export default BabysittingPage;
