import React from 'react';
import Header from '../components/Header';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <h1>Main page</h1>
      </div>
    );
  }
}
export default Home;
