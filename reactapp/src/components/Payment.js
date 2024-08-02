import React from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/Payment.css';

const Payment = () => {
  const { id } = useParams(); // Change `companyId` to `id` to match Booking component

  const fetchCompanyDetails = (companyId) => {
    const companies = {
      '1': { name: 'Wedplanners', amount: '$500' },
      '2': { name: 'Marriedly', amount: '$400' },
      '3': { name: 'Just Fun', amount: '$300' },
      '4': { name: 'Weddays', amount: '$600' }
    };
    return companies[companyId] || { name: 'Unknown Company', amount: 'N/A' };
  };

  const companyDetails = fetchCompanyDetails(id);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted');
  };

  return (
    <div className="payment-container">
      <h2>Payment for {companyDetails.name}</h2>
      <form onSubmit={handlePaymentSubmit} className="payment-form">
        <table>
          <tbody>
            <tr>
              <td><label>Company Name:</label></td>
              <td>{companyDetails.name}</td>
            </tr>
            <tr>
              <td><label>Event Amount:</label></td>
              <td>{companyDetails.amount}</td>
            </tr>
            <tr>
              <td><label>Credit Card Number:</label></td>
              <td><input type="text" name="cardNumber" required /></td>
            </tr>
            <tr>
              <td><label>Expiration Date:</label></td>
              <td><input type="text" name="expirationDate" required /></td>
            </tr>
            <tr>
              <td><label>CVV:</label></td>
              <td><input type="text" name="cvv" required /></td>
            </tr>
            <tr>
              <td><label>Billing Address:</label></td>
              <td><input type="text" name="billingAddress" required /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'right' }}>
                <button type="submit">Pay Now</button>
                <button type="button" onClick={() => window.history.back()}>Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Payment;
