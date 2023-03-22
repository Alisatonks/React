import React from 'react';
import { IFormCardData } from '../../types/types';

class FormCard extends React.PureComponent<IFormCardData> {
  render() {
    const { title } = this.props;

    return (
      <div className="card">
        <div className="card__brand">{title}</div>
      </div>
    );
  }
}
export default FormCard;
