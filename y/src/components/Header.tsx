import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  const location = useLocation();

  function defineLocation() {
    const pageName = location.pathname.replace('%20', ' ').slice(1);
    return pageName || 'Main Page';
  }

  return (
    <header className="header">
      <h1>{defineLocation()}</h1>
      <Navbar />
    </header>
  );
}
export default Header;
