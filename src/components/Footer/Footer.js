import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: support@maidbooking.com</p>
                    <p>Phone: +1 (234) 567-890</p>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Online Maid Booking. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;