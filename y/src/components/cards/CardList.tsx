import React from 'react';
import { ICharacter, RootState } from 'types/types';
import { useSelector } from 'react-redux';
import Card from './Card';
import { useGetCharacterQuery } from '../../redux/apiSlice';

function CardList() {
  const { search } = useSelector((state: RootState) => {
    return state;
  });
  const { data, isLoading, isFetching, error } = useGetCharacterQuery(search);
  if (isLoading || isFetching) return <div>Loading...</div>;
  if (!data || error) return <div>Nothing is found</div>;

  return (
    <div className="card__wrapper">
      {data.results.map((el: ICharacter) => {
        return (
          <Card
            key={el.id}
            image={el.image}
            name={el.name}
            status={el.status}
            id={el.id}
          />
        );
      })}
    </div>
  );
}
export default CardList;
