import React from 'react';
import { Link } from 'react-router-dom';
import { IoBusiness, IoHome } from "react-icons/io5";
import { GiWell } from "react-icons/gi";
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div id="home" className="home-container">
        <div className="top-section">
          <div className="title-container">
            <h1 className="title">Cost Calculator</h1>
            <h2 className="subtitle">Get transparent pricing for solar systems in Cameroon</h2>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="icon-container">
              <IoHome style={{ color: "#F7CB08", fontSize: "40px" }} />
            </div>
            <h3 className="card-title">Residential</h3>
            <p className="card-body">Calculate Your Cost Now</p>
            <Link to="/customerform" className="custom-link">
              <button className="card-button">Estimate</button>
            </Link>
          </div>
          <div className="card">
            <div className="icon-container">
              <IoBusiness style={{ color: "#F7CB08", fontSize: "40px" }} />
            </div>
            <h3 className="card-title">Commercial</h3>
            <p className="card-body">Calculate Your Cost Now</p>
            <Link to="/userinfo" className="custom-link">
              <button className="card-button">Estimate</button>
            </Link>
          </div>
          <div className="card">
            <div className="icon-container">
              <GiWell style={{ color: "#F7CB08", fontSize: "40px" }} />
            </div>
            <h3 className="card-title">Custom Solutions</h3>
            <p className="card-body">Calculate Your Cost Now</p>
            <Link to="/customerinfo" className="custom-link">
              <button className="card-button">Estimate</button>
            </Link>
          </div>
        </div>
        <div className="bottom-section mb-8"></div>
      </div>
      <div id="faq" className="mt-36">
        <FAQ />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
