import React from 'react';
import { IFormPageState } from '../../types/types';
import FormCard from './FormCard';

class FormCardList extends React.PureComponent<IFormPageState> {
  render() {
    const { formCards } = this.props;
    return (
      <div className="card__wrapper">
        {formCards.map((el) => {
          return (
            <FormCard
              key={el.id}
              title={el.title}
              date={el.date}
              id={el.id}
              reason={el.reason}
              concent={el.concent}
              radio={el.radio}
              inputFile={el.inputFile}
            />
          );
        })}
      </div>
    );
  }
}
export default FormCardList;
