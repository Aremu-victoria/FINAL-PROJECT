import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/HeroSection.css'; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-12 col-md-6 my-5">
          <div className="hero-left">
            <h1 style={{ color: '#08620e' }}>Upload Educational <span><br />Resources</span></h1>
            <p style={{ color: '#08620e' }}>Search and download <br /> educational materials</p>
            <div className="search-input">
              <input type="text" placeholder="Search resources..." />
              <i className="fa fa-search search-icon"></i>
            </div>
            <div className="search-btns" style={{ marginTop: '20px' }}>
              <button className="get-started-btn">Get Started</button>
              <Link to="/signup"><button className="sign-up-btn">Sign Up</button></Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 my-5">
          <div className="hero-right" style={{ marginTop: '-50px' }}>
            <img src="/heros.png" alt="Learning Illustration" className="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;