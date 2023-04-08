import React, { useState, useEffect } from 'react';
import { ICharacter } from 'types/types';
import { getSingleCharacter } from '../apiFunctions';
import cross from '../../assets/svg/x_icon-orange.svg';

interface ModalCardProps {
  id: number;
}

const ModalCard: React.FC<ModalCardProps> = function ModalCard({ id }) {
  const [data, setData] = useState<ICharacter>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getSingleCharacter(id);
      setData(result);
    };

    fetchData();
  }, [id]);

  return data ? (
    <div className="modal__card">
      <img src={cross} alt="close-icon" className="cross" />
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
  ) : null;
};

export default ModalCard;
