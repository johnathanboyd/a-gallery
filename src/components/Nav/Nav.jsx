import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
        <Link to="/">
          <h2 className="nav-title">Biz Name</h2>
        </Link>
        <div>
        <Link className="navLink" to="/">
          Home
        </Link>
  
          <Link className="navLink" to="/about">
            About
          </Link>
        </div>
      </div>
    );
}

export default Nav;