import React, { useState } from 'react';
import './Payment.css'; // Ensure you have this CSS file for styling

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');

    const handlePayment = (event) => {
        event.preventDefault();
        // Payment processing logic here
        alert('Payment processed successfully!');
    };

    return (
        <div className="payment-page">
            <h1>Payment Page</h1>
            <form className="payment-form" onSubmit={handlePayment}>
                <div className="form-group">
                    <label htmlFor="name">Cardholder Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter cardholder name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="tel"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                        maxLength="16"
                        pattern="\d{16}" // Validation for 16 digits
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input
                            type="text"
                            id="expiryDate"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            placeholder="MM/YY"
                            maxLength="5"
                            pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$" // Validation for MM/YY format
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="tel"
                            id="cvv"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            placeholder="123"
                            maxLength="3"
                            pattern="\d{3}" // Validation for 3 digits
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="submit-button">Pay Now</button>
            </form>
        </div>
    );
};

export default Payment;
