import React from 'react';
import { IReceivedData } from 'types/types';
import Card from './Card';

function CardList(props: IReceivedData) {
  const { data } = props;
  return (
    <div className="card__wrapper">
      {data.map((el) => {
        return (
          <Card
            key={el.id}
            image={el.image}
            name={el.name}
            status={el.status}
          />
        );
      })}
    </div>
  );
}
export default CardList;
