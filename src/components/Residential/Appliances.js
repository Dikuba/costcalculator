import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AddAppliance from "./AddAppliance";
import ApplianceList from "./ApplianceList";
import { IoMdArrowRoundBack } from "react-icons/io";
import { calculateQuote } from "./residentialusers";
import axios from 'axios';
import Image from "../Assets/Calculate1.jpg";
import "./Appliances.css";

const Appliances = () => {
  const [appliances, setAppliances] = useState([]);
  const [quote, setQuote] = useState(null);
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

  const addAppliance = (appliance) => {
    setAppliances([...appliances, appliance]);
  };

  const deleteAppliance = (applianceToDelete) => {
    const updatedAppliances = appliances.filter(
      (appliance) => appliance !== applianceToDelete
    );
    setAppliances(updatedAppliances);
  };

  const generateQuote = () => {
    const newQuote = calculateQuote(appliances);
    setQuote(newQuote);
    sendQuoteToBackend(newQuote);
    navigate('/quote', { state: { quote: newQuote, customerDetails, appliances } });
  };

  const sendQuoteToBackend = (quote) => {
    const dataToSend = {
      facture_id: customerDetails.id,
      totalBattery_cap: quote.batteryCapacity,
      system_price: quote.panelPrice
    };
    axios.post('http://192.168.1.26:8001/api/res_power/post', dataToSend)
      .then(response => {
        console.log("Quote saved successfully:", response.data);
      })
      .catch(error => {
        console.error("Error saving quote:", error);
      });
  };

  

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <button 
            className="absolute top-4 left-4 font-bold py-2 px-4 rounded flex items-center"
            onClick={() => navigate(-1)}>
            <IoMdArrowRoundBack className="mr-2" style={{ fontSize: "24px" }} />
           
          </button>
          <img src={Image} alt="Appliance Management" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6 flex flex-col">
          <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">Manage Appliances</h1>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="md:w-1/2 bg-yellow-50 rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Appliance</h2>
              <AddAppliance onAddAppliance={addAppliance} />
            </div>
            <div className="md:w-1/2 bg-yellow-50 rounded-lg shadow p-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Appliance List</h2>
              <ApplianceList appliances={appliances} onDeleteAppliance={deleteAppliance} />
            </div>
          </div>
          <button 
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-2xl mt-6 w-1/3 mx-auto"
            onClick={generateQuote}>
            Generate Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Appliances;
