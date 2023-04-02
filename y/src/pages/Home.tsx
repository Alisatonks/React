import React from 'react';
import CardList from '../components/cards/CardList';
import SearchBar from '../components/SearchBar';

function Home() {
  return (
    <div>
      <main className="home">
        <SearchBar key="searchBarKey" />
        <CardList />
      </main>
    </div>
  );
}
export default Home;
