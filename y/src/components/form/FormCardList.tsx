import React from 'react';
import { IFormPageState } from '../../types/types';
import FormCard from './FormCard';

class FormCardList extends React.PureComponent<IFormPageState> {
  render() {
    const { formCards } = this.props;
    return (
      <div className="card__wrapper">
        {formCards.map((el) => {
          return <FormCard key={el.title} title={el.title} />;
        })}
      </div>
    );
  }
}
export default FormCardList;
