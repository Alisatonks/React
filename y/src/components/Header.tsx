import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <h1>Main Page</h1>
        <Link to="/About us">About us</Link>
      </header>
    );
  }
}
export default Header;
