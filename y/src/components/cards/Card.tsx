import React from 'react';
import CardImg from './CardImg';
import { IGeneralCard } from '../../types/types';

function Card(props: IGeneralCard) {
  const { image, name, status } = props;
  return (
    <div className="card">
      <div className="card__name">
        <div className="card__brand">{name}</div>
      </div>
      <CardImg image={image} alt="character image" myClass="card__img" />
      <div className="card__info">
        <div className="card__info-details">{`status: ${status}`}</div>
      </div>
    </div>
  );
}
export default Card;
