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
          cardsData={cardsData}
        />
        {isLoading && <div>Loading...</div>}
        {cardsData && <CardList data={cardsData} />}
        {cardsData === undefined ? <div>Nothing is found</div> : null}
      </main>
    </div>
  );
}
export default Home;
