import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "../Assets/Form.jpg";
import axios from 'axios';

const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    email: '',
    phone: '',
    fullName: '',
    address: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://192.168.1.26:8001/api/residential/post', customer)
      .then(response => {
        console.log(response.data);
        // Navigate to the appliances page after successful submission
        navigate('/appliances');
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="relative md:w-1/3">
          <button 
            className="absolute top-4 left-4 py-2 px-4 rounded flex items-center"
            onClick={() => navigate(-1)}>
            <IoMdArrowRoundBack className="mr-2" style={{ color: "bg-gray-700", fontSize: "24px" }} />
          </button>
          <img src={Image} alt="Customer Info" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-2/3 p-6">
          <form onSubmit={handleSubmit}  className="p-4 max-w-lg mt-2 mx-auto bg-yellow-50 shadow-md rounded-md">
            <div className="mb-4 mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email Address</label>
              <input type="email" name="email" value={customer.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" value={customer.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name</label>
              <input type="text" name="fullName" value={customer.fullName} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address</label>
              <input type="text" name="address" value={customer.address} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
            </div>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Next</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerForm;
