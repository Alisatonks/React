import React from 'react';
import { ICardProps2 } from '../../types/types';

function CardInfo(props: ICardProps2) {
  const { category, discount, rating, stock } = props;
  return (
    <div className="card__info">
      <div className="card__info-details">{`category: ${category}`}</div>
      <div className="card__info-details">{`discount: ${discount}%`}</div>
      <div className="card__info-details">{`rating: ${rating}%`}</div>
      <div className="card__info-details">{`stock: ${stock}`}</div>
    </div>
  );
}
export default CardInfo;
