import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">Learning<span style={{ color: '#08620e' }}>HUB</span></div>
      <nav className="nav-links">
        <Link to="/Home"><button className="nav-btn">HOME</button></Link>
        <Link to="/Subject"><button className="nav-btn">SUBJECT</button></Link>
        <Link to="/About"><button className="nav-btn">ABOUT</button></Link>
        <Link to="/Contact"><button className="nav-btn">CONTACT</button></Link>
      </nav>
    </header>
  );
};

export default Navbar;