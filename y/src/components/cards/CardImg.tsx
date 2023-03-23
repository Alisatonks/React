import React from 'react';
import { ImgProps } from '../../types/types';

class CardImg extends React.PureComponent<ImgProps> {
  render() {
    const { source, alt, myClass } = this.props;
    return (
      <div className="card__img-wrapper">
        <img src={source} alt={alt} className={myClass} />
      </div>
    );
  }
}
export default CardImg;
