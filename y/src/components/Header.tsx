import React from 'react';
import Navbar from './Navbar';
import { IH1Content } from '../types/types';

function Header(props: IH1Content) {
  const { content } = props;
  return (
    <header className="header">
      <h1>{content}</h1>
      <Navbar />
    </header>
  );
}
export default Header;
