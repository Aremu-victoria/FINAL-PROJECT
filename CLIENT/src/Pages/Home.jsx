import React from 'react';
import '../Components/Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to LearningHub</h1>
        <p>Your gateway to knowledge and growth</p>
      </header>
      <main className="home-main">
        <section className="home-section">
          <h2>About LearningHub</h2>
          <p>At LearningHub, we provide resources and tools to help you achieve your learning goals.</p>
        </section>
        <section className="home-section">
          <h2>Our Courses</h2>
          <p>Explore a variety of courses designed to enhance your skills and knowledge.</p>
        </section>
        <section className="home-section">
          <h2>Join Our Community</h2>
          <p>Connect with like-minded learners and grow together.</p>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2025 LearningHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;