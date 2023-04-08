import React, { useState } from 'react';
import CardImg from './CardImg';
import { IGeneralCard } from '../../types/types';
import { getSingleCharacter } from '../apiFunctions';
import Modal from '../modal/Modal';

function Card(props: IGeneralCard) {
  const { image, name, status, id } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async () => {
    const data = await getSingleCharacter(id);
    setIsModalOpen(true);
    console.log(data);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };
  return (
    <div
      className="card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="card__name">
        <div className="card__brand">{name}</div>
      </div>
      <CardImg image={image} alt="character image" myClass="card__img" />
      <div className="card__info">
        <div className="card__info-details">{`status: ${status}`}</div>
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}
export default Card;
