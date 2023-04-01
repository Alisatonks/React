import React from 'react';
import { ImgProps } from '../../types/types';

function CardImg(props: ImgProps) {
  const { source, alt, myClass } = props;
  return (
    <div className="card__img-wrapper">
      <img
        src={typeof source === 'string' ? source : ''}
        alt={alt}
        className={myClass}
      />
    </div>
  );
}
export default CardImg;
