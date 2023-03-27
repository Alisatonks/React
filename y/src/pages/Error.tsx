import React from 'react';
import { Link } from 'react-router-dom';
import sloth from '../assets/png/sloth.png';

class Error extends React.PureComponent {
  render() {
    return (
      <div className="error">
        <h1 className="error__h1">This is an error page</h1>
        <Link to="/" className="error__link">
          Go Home
        </Link>
        <div className="error__sloth-cont">
          <img src={sloth} className="error__sloth" alt="404_img" />
        </div>
      </div>
    );
  }
}
export default Error;
