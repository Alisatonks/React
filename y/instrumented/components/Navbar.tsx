import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <NavLink to="/" className="nav__link">
            Main page
          </NavLink>
        </li>
        <li className="nav__li">
          <NavLink to="/About us" className="nav__link">
            About us
          </NavLink>
        </li>
        <li className="nav__li">
          <NavLink to="/Form Page" className="nav__link">
            Form Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
