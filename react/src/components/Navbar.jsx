import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>OSCARS AWARDS 2023</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Actors">Actors</Link>
        </li>
        <li>
          <Link to="/Films">Films</Link>
        </li>
        <li>
          <Link to="/Reach us">Reach us</Link>
        </li>
      
      </ul>
    </nav>
  );
};

export default Navbar;
