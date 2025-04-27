import React from 'react';
import '../Components/About.css';

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About LearningHub</h1>
      </header>
      <main className="about-main">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            LearningHub is dedicated to revolutionizing education by providing an integrated school system 
            for uploading and managing educational resources. Our platform empowers educators and students 
            to seamlessly share, access, and utilize learning materials.
          </p>
        </section>
        <section className="about-section">
          <h2>What We Offer</h2>
          <p>
            Our system is designed to simplify the process of resource sharing in schools. 
            Key features include:
          </p>
          <ul>
            <li>Secure and centralized resource management</li>
            <li>Easy uploading and categorization of materials</li>
            <li>Access control for educators and students</li>
            <li>Collaboration tools for enhanced learning</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Why Choose LearningHub?</h2>
          <p>
            We believe in the power of technology to transform education. By integrating 
            modern tools into the learning process, we aim to create a more efficient, 
            collaborative, and accessible educational environment.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;