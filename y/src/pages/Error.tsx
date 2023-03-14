import React from 'react';
import { Link } from 'react-router-dom';

class Error extends React.PureComponent {
  render() {
    return (
      <>
        <h1>This is an error page</h1>
        <Link to="/">Go Home</Link>
      </>
    );
  }
}
export default Error;
