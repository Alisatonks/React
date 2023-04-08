import React, { useState, useEffect } from 'react';
import { ICharacter, ModalCardProps } from 'types/types';
import { getSingleCharacter } from '../apiFunctions';
import cross from '../../assets/svg/x_icon-orange.svg';

const ModalCard: React.FC<ModalCardProps> = function ModalCard({
  id,
  setIsModalOpen,
}) {
  const [data, setData] = useState<ICharacter>();
  useEffect(() => {
    const fetchData = async () => {
      const result = await getSingleCharacter(id);
      setData(result);
    };
    fetchData();
  }, [id]);

  const onCross = (event: React.MouseEvent<HTMLImageElement>) => {
    setIsModalOpen(false);
    event.stopPropagation();
  };

  function onModal(e: React.MouseEvent<HTMLImageElement>) {
    setIsModalOpen(false);
    e.stopPropagation();
  }

  return data ? (
    <div className="modal__wrapper">
      <div
        className="overlay"
        onClick={onModal}
        role="button"
        tabIndex={0}
        aria-label="Close Modal"
      />
      <div className="modal__card">
        <img src={cross} alt="close-icon" className="cross" onClick={onCross} />
        <div className="modal__img-wrapper">
          <img
            src={typeof data.image === 'string' ? data.image : ''}
            alt="character"
            className="form__card-img"
          />
        </div>
        <div className="form__card-title"> {data.name}</div>
        <div className="card__info-details">Status: {data.status}</div>
        <div className="card__info-details">Gender: {data.gender}</div>
        <div className="card__info-details">Species: {data.species}</div>
        <div className="card__info-details">Location: {data.location.name}</div>
        <div className="card__info-details">Created: {data.created}</div>
        <div className="card__info-details">
          Episodes:
          {data.episode.map((e) => e.split('/').pop()).join(', ')}
        </div>
      </div>
    </div>
  ) : (
    <div className="loading">Loading...</div>
  );
};

export default ModalCard;
