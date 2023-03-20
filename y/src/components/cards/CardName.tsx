import React from 'react';
import { ICardProps1 } from '../../types/types';

class CardName extends React.PureComponent<ICardProps1> {
  render() {
    const { name, brand } = this.props;
    return (
      <div className="card__name">
        <div className="card__brand">{name}</div>
        <div className="card__model">{brand}</div>
      </div>
    );
  }
}
export default CardName;
