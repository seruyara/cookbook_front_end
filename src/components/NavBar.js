import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/logo.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/HomePage" activeClassName="active">
            HomePage
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Recipe" activeClassName="active">
            Recipe
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/Dietaries" activeClassName="active">
            Dietaries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

