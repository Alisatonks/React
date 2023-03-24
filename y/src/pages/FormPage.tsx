/* eslint-disable react/destructuring-assignment */
import React from 'react';
import FormContainer from '../components/form/FormContainer';
import Header from '../components/Header';
import FormCardList from '../components/form/FormCardList';
import { IFormCardData, IFormPageState, IProps } from '../types/types';

class FormPage extends React.PureComponent<IProps, IFormPageState> {
  constructor(props: IProps) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.state = {
      formCards: [],
    };
  }

  addCard(data: IFormCardData) {
    this.setState((prevState) => ({
      formCards: [...prevState.formCards, data],
    }));
  }

  render() {
    const { formCards } = this.state;
    return (
      <div className="form-page">
        <Header content="Form Page" />
        <h2 className="form-page__title">
          Please fullfil the following form to return your purchase
        </h2>
        <FormContainer addCard={this.addCard} />
        <FormCardList formCards={formCards} />
      </div>
    );
  }
}
export default FormPage;
