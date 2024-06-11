import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Appliances.css";

const Quote = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { quote, customerDetails, appliances } = location.state || {};
  
  const printQuote = () => {
    window.print();
  };
 

  if (!quote) {
    return (
      <div className="max-w-6xl mx-auto bg-yellow-50 mt-32 shadow-md rounded-lg p-4 md:p-8 pt-50">
        <h2>Error: Quote data is missing or invalid.</h2>
      </div>
    );
  }

  return (
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
        <table className="quote-table">
          <thead>
            <tr>
              <th>Appliance</th>
              <th>Power Rating (W)</th>
              <th>Usage Hours</th>
            </tr>
          </thead>
          <tbody>
            {appliances.map((appliance, index) => (
              <tr key={index}>
                <td>{appliance.name}</td>
                <td>{appliance.powerRating}</td>
                <td>{appliance.usage}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="quote-totals">
            <tr>
              <td>Total Power</td>
              <td>{quote.totalPower.toLocaleString()} W</td>
              <td></td>
            </tr>
            <tr>
              <td>Peak Power</td>
              <td>{quote.peakPower.toLocaleString()} W</td>
              <td></td>
            </tr>
            <tr>
              <td>Battery Capacity</td>
              <td>{quote.batteryCapacity.toLocaleString()} W</td>
              <td></td>
            </tr>
            <tr>
              <td>Panel Price</td>
              <td>{quote.panelPrice.toLocaleString()} XAF</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <button className="print-button mt-4" onClick={printQuote}>
        Print Quote
      </button>
    </div>
  );
};

export default Quote;
