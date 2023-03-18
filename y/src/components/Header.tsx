import React from 'react';
import Navbar from './Navbar';
import { IH1Content } from '../types/types';

class Header extends React.PureComponent<IH1Content> {
  render() {
    const { content } = this.props;
    return (
      <header className="header">
        <h1>{content}</h1>
        <Navbar />
      </header>
    );
  }
}
export default Header;
