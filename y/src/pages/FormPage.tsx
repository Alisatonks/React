import React, { useCallback, useState } from 'react';
import FormComponentHook from '../components/form/FormComponentHook';
import CardList from '../components/form/FormCardList';
import { IObjectValues } from '../types/types';

function FormPage() {
  const [formCards, setFormCards] = useState<IObjectValues[]>([]);

  const updateFormCards = useCallback(
    (object: IObjectValues) => {
      setFormCards([...formCards, object]);
    },
    [formCards]
  );

  return (
    <div className="form-page">
      <h2 className="form-page__title">
        Please fullfil the following form to return your purchase
      </h2>
      <FormComponentHook updateFormCards={updateFormCards} />
      <CardList formCards={formCards} />
    </div>
  );
}

export default FormPage;
