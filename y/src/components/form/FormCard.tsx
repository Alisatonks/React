import React from 'react';
import CardImg from '../cards/CardImg';
import { IFormCardData } from '../../types/types';

class FormCard extends React.PureComponent<IFormCardData> {
  render() {
    const { title, date, reason, concent, radioReturn, inputFile } = this.props;
    return (
      <div className="card">
        <CardImg source={inputFile} alt="your img" myClass="form__card-img" />
        <div className="form__card-title">Name of the product: {title}</div>
        <div className="card__info-details">Date of the purchase: {date}</div>
        <div className="card__info-details">Return reason: {reason}</div>
        <div className="card__info-details">
          Concent with return policy: {concent ? 'Yes' : 'No'}
        </div>
        <div className="card__info-details">
          Return Option:
          {radioReturn ? 'Return money' : 'Exchange to another product'}
        </div>
      </div>
    );
  }
}
export default FormCard;
