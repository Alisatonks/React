import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.PureComponent {
  render() {
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
        </ul>
      </nav>
    );
  }
}
export default Navbar;
