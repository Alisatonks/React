import React, { useState } from 'react';
import { ICharacter } from 'types/types';
import CardList from '../components/cards/CardList';
import SearchBar from '../components/SearchBar';

function Home() {
  const [cardsData, setCardsData] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <main className="home">
        <SearchBar
          key="searchBarKey"
          setCardsData={setCardsData}
          setIsLoading={setIsLoading}
        />
        {isLoading && <div>Loading...</div>}
        {cardsData && <CardList data={cardsData} />}
      </main>
    </div>
  );
}
export default Home;
