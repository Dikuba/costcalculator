import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./quote.css";

const WaterPumpingSystemQuote = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { customerDetails, purpose, wellDepth, heightToTank, distanceToTap, quote } = location.state || {};

  const printQuote = () => {
    window.print();
  };

  if (!quote || typeof quote !== 'string' || isNaN(Number(quote))) {
    return (
      <div className="max-w-6xl mx-auto bg-yellow-50 mt-32 shadow-md rounded-lg p-4 md:p-8 pt-50">
        <h2>Error: Quote data is missing or invalid.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto bg-yellow-50 mt-32 shadow-md rounded-lg p-4 md:p-8 pt-50">
      <div className="quote-container mt-8">
        <div className="quote bg-yellow-50 p-4 rounded-lg">
          <div className="quote-header">
            <h1>Quote</h1>
            <div className="quote-info">
              <p><strong>Quote of:</strong> {customerDetails ? customerDetails.fullName : 'Customer Name'}</p>
              <p><strong>Phone:</strong> {customerDetails ? customerDetails.phone : 'Phone Number'}</p>
              <p><strong>Address:</strong> {customerDetails ? customerDetails.address : 'Address'}</p>
              <p><strong>Date & Time:</strong> {new Date().toLocaleString()}</p>
            </div>
          </div>
          <div className="quote-content">
            <p><strong>Purpose:</strong> {purpose}</p>
            <p><strong>Well Depth:</strong> {wellDepth} meters</p>
            <p><strong>Height to Tank:</strong> {heightToTank} meters</p>
            <p><strong>Distance to Tap:</strong> {distanceToTap} meters</p>
            <p><strong>Amount:</strong> {new Intl.NumberFormat("en-US").format(Number(quote))} XAF</p>
          </div>
        </div>

        <button className="print-button mt-4" onClick={printQuote}>
          Print Quote
        </button>
      </div>
    </div>
  );
};

export default WaterPumpingSystemQuote;
