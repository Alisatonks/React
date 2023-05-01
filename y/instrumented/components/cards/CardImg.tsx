import React from 'react';
import { ImgProps } from '../../types/types';

function CardImg(props: ImgProps) {
  const { image, alt, myClass } = props;
  return (
    <div className="card__img-wrapper">
      <img
        src={typeof image === 'string' ? image : ''}
        alt={alt}
        className={myClass}
      />
    </div>
  );
}
export default CardImg;
