import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <main className="home">
          <SearchBar />
        </main>
      </div>
    );
  }
}
export default Home;
