import React from 'react';
import '../Components/Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
      </header>
      <main className="contact-main">
        <section className="contact-section">
          <p>We'd love to hear from you! Reach out to us using the information below:</p>
          <ul>
            <li>Email: support@learninghub.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 LearningHub Lane, Knowledge City, EduWorld</li>
          </ul>
          <p>Or fill out our contact form to send us a message directly.</p>
        </section>
      </main>
    </div>
  );
};

export default Contact;