import React from 'react';
import '../Components/LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing-page">

            <header className="navbar">
                <div className="logo">Learning<span style={{ color: '#08620e' }}>HUB</span></div>
                <nav className="nav-links">
                    <Link to="/Home"><button
                        style={{ backgroundColor: '#0cb918', borderRadius: '7px', color: 'white', border: 'none' }}>
                        HOME
                    </button></Link>

                    <Link to="/Subject"><button
                        style={{ backgroundColor: '#0cb918', borderRadius: '7px', color: 'white', border: 'none' }}>
                        SUBJECT
                    </button></Link>

                    <Link to="/About"><button
                        style={{ backgroundColor: '#0cb918', borderRadius: '7px', color: 'white', border: 'none' }}>
                        ABOUT
                    </button></Link>

                    <Link to="Contact"><button
                        style={{ backgroundColor: '#0cb918', borderRadius: '7px', color: 'white', border: 'none' }}>
                        CONTACT
                    </button></Link>
                </nav>
            </header>


            <section className="hero">
                <div className="hero-left">
                    <h1 style={{ color: '#08620e' }}>Upload Educational <span style={{color:'#08620e'}}> <br />Resources</span></h1>
                    <p style={{ color: '#08620e' }}>Search and download <br /> educational materials</p>

                        <div className="search-input">
                            <input type="text" placeholder="Search resources..." />
                            <i className="fa fa-search search-icon"></i>
                        </div>
                        <div className='search-btns' style={{ marginTop: '20px' }}>
                        <button className="get-started-btn">Get Started</button> 
                    <button className="sign-up-btn">Sign Up</button>
                    </div>
                </div>
                <div className="hero-right" style={{marginTop:'-50px'}}>
                    <img src="/landing.jpg " alt="Learning Illustration" />
                </div>
            </section>


            <section className="explore-category">
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


            <footer className="footer">
                <div className="footer-left">
                    <p>Hello,</p>
                    <p>We're LearningHUB</p>
                </div>

                <div className="footer-center">
                    <p>We provide a platform <br />to upload, share, access <br /> educational materials such as <br /> books, pdf, videos, audios etc.</p>
                </div>

                <div className="footer-right">
                    <div className="social-icons">
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-video-camera"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                </div>
                <div>
                    <p>Send us a mail</p>
                    <p>learninghub@gmail.com</p>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;
