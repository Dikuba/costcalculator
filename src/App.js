import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
//import FAQ from './components/FAQ';
import UserInfo from './components/Commercial/UserInfo';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
//import About from './components/About';
import Contact from './components/Contact';
import WaterPumpingSystem from './components/Other_solutions/WaterPumpingSystem';
import Appliances from './components/Residential/Appliances';
import Quote from './components/Residential/Quote';
import CustomerInfo from './components/Other_solutions/CustomerInfo';
import CustomerForm from './components/Residential/CustomerForm';
import WaterPumpingSystemQuote from './components/Other_solutions/WaterPumpingSystemQuote';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
          <Router>
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/waterpumpingsystem" element={<WaterPumpingSystem />} />
        {/* <Route path="/faq" element={<FAQ />} />*/}
         <Route path="/login" element={<LogIn/>} />
         <Route path="/signup" element={<SignUp/>} />
         {/*<Route path="/about" element={<About/>} />*/}
         <Route path="/contact" element={<Contact/>} />
         <Route path="/customerform" element={<CustomerForm />} />
         <Route path="/customerinfo" element={<CustomerInfo />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/waterpumping-quote" element={<WaterPumpingSystemQuote />} />
          <Route path="/quote" element={<Quote/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
