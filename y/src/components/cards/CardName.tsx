import React from 'react';
import { ICardProps1 } from '../../types/types';

function CardName(props: ICardProps1) {
  const { name, brand } = props;
  return (
    <div className="card__name">
      <div className="card__brand">{name}</div>
      <div className="card__model">{brand}</div>
    </div>
  );
}
export default CardName;
