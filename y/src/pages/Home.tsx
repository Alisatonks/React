import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Card from '../components/cards/Card';
import cardsData from '../utils/cardsData';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Header content="Main Page" />
        <main className="home">
          <SearchBar key="searchBarKey" />
          <div className="card__wrapper">
            {cardsData.products.map((el) => {
              return (
                <Card
                  key={el.id}
                  source={el.thumbnail}
                  price={el.price}
                  name={el.title}
                  brand={el.brand}
                  category={el.category}
                  discount={el.discount}
                  rating={el.rating}
                  stock={el.stock}
                />
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}
export default Home;
