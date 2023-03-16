import React from 'react';
import CardName from './CardName';
import CardInfo from './CardInfo';
import CardBtns from './CardBtns';
import { ICardProps } from '../../types/types';

class Card extends React.PureComponent<ICardProps> {
  render() {
    const { source, price, name, brand, category, discount, rating, stock } =
      this.props;
    return (
      <div className="card">
        <CardName name={name} brand={brand} />
        <div className="card__img-wrapper">
          <img src={source} alt="product" className="card__img" />
        </div>
        <CardInfo
          category={category}
          discount={discount}
          rating={rating}
          stock={stock}
        />
        <div className="card__price">{`€${price}`}</div>
        <CardBtns />
      </div>
    );
  }
}
export default Card;
