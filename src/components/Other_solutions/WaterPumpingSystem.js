import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { calculateForageResult, calculateWellResult } from "./CalculateWaterPumpingSystemQuote";
import axios from 'axios';
import "./quote.css";
import Image from "../Assets/calculating1.jpg"

const WaterPumpingSystem = () => {
  const [purpose, setPurpose] = useState("");
  const [wellDepth, setWellDepth] = useState(20);
  const [heightToTank, setHeightToTank] = useState("");
  const [distanceToTap, setDistanceToTap] = useState("");
  const [customerDetails, setCustomerDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://192.168.1.26:8001/api/get')
      .then(response => {
        if (response.data.length > 0) {
          setCustomerDetails(response.data[0]);
        }
      })
      .catch(error => {
        console.error("Error fetching customer details:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let quote;
    const heightToTankNum = Number(heightToTank);
    const distanceToTapNum = Number(distanceToTap);
    const wellDepthNum = Number(wellDepth);

    if (purpose === "well") {
      quote = calculateWellResult(heightToTankNum);
    } else if (purpose === "forage") {
      quote = calculateForageResult(wellDepthNum, heightToTankNum, distanceToTapNum);
    }

    if (quote && !isNaN(Number(quote))) {
      sendQuoteToBackend(quote);
      navigate('/waterpumping-quote', {
        state: { customerDetails, purpose, wellDepth, heightToTank, distanceToTap, quote }
      });
    } else {
      console.error("Quote calculation failed.");
    }
  };

  const sendQuoteToBackend = (quote) => {
    const dataToSend = {
      facture_id: customerDetails.id,
      totalBattery_cap: quote.batteryCapacity,
      system_price: quote.panelPrice
    };
    axios.post('http://192.168.1.26:8001/api/other_solutions/post', dataToSend)
      .then(response => {
        console.log("Quote saved successfully:", response.data);
      })
      .catch(error => {
        console.error("Error saving quote:", error);
      });
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="relative md:w-1/2">
          <button 
            className="absolute top-4 left-4 py-2 px-4 rounded flex items-center"
            onClick={() => navigate(-1)}>
            <IoMdArrowRoundBack className="mr-2" style={{ color: "bg-gray-700", fontSize: "24px" }} />
           
          </button>
          <img src={Image} alt="Water Pumping System" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-6">
          <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Water Pumping System</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="purpose" className="block text-gray-700 text-sm font-bold mb-2">Purpose</label>
              <select
                name="purpose"
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3 py-2 border rounded">
                <option value="">Select Purpose</option>
                <option value="well">Well</option>
                <option value="forage">Forage</option>
              </select>
            </div>
            {purpose === "forage" && (
              <div>
                <label htmlFor="wellDepth" className="block text-gray-700 text-sm font-bold mb-2">Well Depth</label>
                <input
                  type="number"
                  name="wellDepth"
                  id="wellDepth"
                  value={wellDepth}
                  onChange={(e) => setWellDepth(Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded" />
              </div>
            )}
            <div>
              <label htmlFor="heightToTank" className="block text-gray-700 text-sm font-bold mb-2">Height to Tank</label>
              <input
                type="number"
                name="heightToTank"
                id="heightToTank"
                value={heightToTank}
                onChange={(e) => setHeightToTank(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded" />
            </div>
            <div>
              <label htmlFor="distanceToTap" className="block text-gray-700 text-sm font-bold mb-2">Distance to Tap</label>
              <input
                type="number"
                name="distanceToTap"
                id="distanceToTap"
                value={distanceToTap}
                onChange={(e) => setDistanceToTap(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded" />
            </div>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-full">Generate Quote</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaterPumpingSystem;
