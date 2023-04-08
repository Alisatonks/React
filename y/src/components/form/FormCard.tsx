import React from 'react';
import CardImg from '../cards/CardImg';
import { IFormCardData } from '../../types/types';

function FormCard(props: IFormCardData) {
  const { title, date, reason, concent, radio, inputFile } = props;
  return (
    <div className="card">
      <CardImg image={inputFile} alt="your img" myClass="form__card-img" />
      <div className="form__card-title">Name of the product: {title}</div>
      <div className="card__info-details">Date of the purchase: {date}</div>
      <div className="card__info-details">Return reason: {reason}</div>
      <div className="card__info-details">
        Concent with return policy: {concent ? 'Yes' : 'No'}
      </div>
      <div className="card__info-details">Return Option: {radio}</div>
    </div>
  );
}
export default FormCard;
