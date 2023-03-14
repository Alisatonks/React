import React from 'react';
import { Link } from 'react-router-dom';

class AboutUs extends React.PureComponent {
  render() {
    return (
      <>
        <h1>About Us</h1>
        <Link to="/">Go Home</Link>
      </>
    );
  }
}
export default AboutUs;
