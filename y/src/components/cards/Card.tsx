import React from 'react';
import CardName from './CardName';
import CardInfo from './CardInfo';
import CardBtns from './CardBtns';
import CardImg from './CardImg';
import { ICardProps } from '../../types/types';

class Card extends React.PureComponent<ICardProps> {
  render() {
    const { source, price, name, brand, category, discount, rating, stock } =
      this.props;
    return (
      <div className="card">
        <CardName name={name} brand={brand} />
        <CardImg source={source} alt="product" myClass="card__img" />
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
