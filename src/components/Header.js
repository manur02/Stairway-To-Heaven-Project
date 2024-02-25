import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Photos/Logo.png'
import '../style.css'
import '../styleSheet.css'



function Header() {
  return (
    <header>
      <img id="logo" src={logo} alt="Logo" />
      <h1 id="welcome">STAIRWAY TO HEAVEN</h1>
      <h3 className="welcome-animation"><i><b>Welcome to our world of cakes!</b></i></h3>
      <nav className="nav-left">
        <ul>
          <li><Link to="/home"><i className="fa fa-home"></i> Home</Link></li>
          <li><Link to="/about"><i className="fa fa-user-circle"></i> About</Link></li>
          <li><Link to="/order"><i className="fa fa-shopping-cart"></i> Orders</Link></li>
          <li><Link to="/api_explore"><i className="fa fa-rocket"></i> Work</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
