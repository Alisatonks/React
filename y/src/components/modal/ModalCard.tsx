import React from 'react';
import { ModalCardProps } from 'types/types';
import cross from '../../assets/svg/x_icon-orange.svg';
import { useGetSingleCharacterQuery } from '../../redux/apiSlice';

const ModalCard: React.FC<ModalCardProps> = function ModalCard({
  id,
  setIsModalOpen,
}) {
  const { data, isLoading, error } = useGetSingleCharacterQuery(id);
  const onCross = (event: React.MouseEvent<HTMLImageElement>) => {
    setIsModalOpen(false);
    event.stopPropagation();
  };

  function onModal(e: React.MouseEvent<HTMLImageElement>) {
    setIsModalOpen(false);
    e.stopPropagation();
  }

  if (isLoading) return <div className="loading">Loading...</div>;
  if (!data || error) return <div>Something went wrong</div>;
  return (
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
        <div className="card__info-details">
          Location: {data.location?.name}
        </div>
        <div className="card__info-details">Created: {data.created}</div>
        <div className="card__info-details">
          Episodes:
          {data.episode?.map((el: string) => el.split('/').pop()).join(', ')}
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
