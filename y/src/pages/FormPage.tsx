import React from 'react';
import FormContainer from '../components/form/FormContainer';
import Header from '../components/Header';
import FormCardList from '../components/form/FormCardList';
import { IFormCardData, IFormPageState, IProps } from '../types/types';

class FormPage extends React.PureComponent<IProps, IFormPageState> {
  constructor(props: IProps) {
    super(props);
    this.addCard = this.addCard.bind(this);
    this.addValErr = this.addValErr.bind(this);
    this.state = {
      formCards: [],
      validationErrors: [],
    };
  }

  addCard(data: IFormCardData) {
    this.setState((prevState) => ({
      formCards: [...prevState.formCards, data],
    }));
  }

  addValErr(data: string[]) {
    this.setState(() => ({
      validationErrors: data,
    }));
  }

  render() {
    const { formCards, validationErrors } = this.state;
    return (
      <div className="form-page">
        <Header content="Form Page" />
        <h2 className="form-page__title">
          Please fullfil the following form to return your purchase
        </h2>
        <FormContainer
          addCard={this.addCard}
          addValErr={this.addValErr}
          errors={validationErrors}
        />
        <FormCardList
          formCards={formCards}
          validationErrors={validationErrors}
        />
      </div>
    );
  }
}
export default FormPage;
