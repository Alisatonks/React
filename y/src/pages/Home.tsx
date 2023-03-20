import React from 'react';
import CardList from '../components/cards/CardList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Header content="Main Page" />
        <main className="home">
          <SearchBar key="searchBarKey" />
          <CardList />
        </main>
      </div>
    );
  }
}
export default Home;
