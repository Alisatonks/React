import React from 'react';
import Navbar from './Navbar';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <Navbar />
      </header>
    );
  }
}
export default Header;
