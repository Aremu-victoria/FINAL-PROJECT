import React from 'react';
import '../Components/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
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
  );
};

export default Footer;