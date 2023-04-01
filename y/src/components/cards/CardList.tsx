import React from 'react';
import CARDSDATA from '../../utils/cardsData';
import Card from './Card';

function CardList() {
  return (
    <div className="card__wrapper">
      {CARDSDATA.products.map((el) => {
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
  );
}
export default CardList;
