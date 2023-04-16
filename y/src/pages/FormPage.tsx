import React from 'react';
import { useSelector } from 'react-redux';
import FormComponentHook from '../components/form/FormComponentHook';
import CardList from '../components/form/FormCardList';
import { RootState } from '../types/types';

function FormPage() {
  const { formCards } = useSelector((state: RootState) => {
    return state.formCards;
  });

  return (
    <div className="form-page">
      <h2 className="form-page__title">
        Please fullfil the following form to return your purchase
      </h2>
      <FormComponentHook />
      <CardList formCards={formCards} />
    </div>
  );
}

export default FormPage;
