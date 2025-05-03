import React from 'react';
import Navbar from '../Pages/Navbar';
import HeroSection from '../Pages/HeroSection';
import Footer from '../Pages/Footer';
import '../Components/LandingPage.css';

const LandingPage = () => {
  return (
    <>
        <Navbar />
      <HeroSection />
    <div className="landing-page">
      <section className="explore-category" >
        
        <h2 style={{ width: '900px' }}>Explore by category</h2>
        <div className="categories">
          <div className="category-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png" alt="Books" />
            <p>Books and materials</p>
          </div>
          <div className="category-card">
            <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" />
            <p>PDF files</p>
          </div>
          <div className="category-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2721/2721034.png" alt="Videos" />
            <p>Videos resources</p>
          </div>
          <div className="category-card">
            <img src="https://cdn-icons-png.flaticon.com/512/727/727240.png" alt="Audio" />
            <p>Audio resources</p>
          </div>
        </div>
      </section>
      <section className="trending">
        <h2>Trending</h2>
        <div className="trending-cards">
          <div className="trending-card">
            <h3>Introduction to Programming</h3>
            <p>PDF files</p>
            <button>view</button>
          </div>
          <div className="trending-card">
            <h3>Computer System Design</h3>
            <p>Video file</p>
            <button>watch and download</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default LandingPage;