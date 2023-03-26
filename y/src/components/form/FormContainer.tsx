import React, { createRef } from 'react';
import FormComponent from './FormComponent';
import { IFormContainerProps, CardContainerState } from '../../types/types';
import {
  validateRadio,
  validateTitle,
  validateDate,
  validateFile,
  validateReason,
  validateConcent,
} from './validationFunctions';

class FormContainer extends React.PureComponent<
  IFormContainerProps,
  CardContainerState
> {
  inputText: React.RefObject<HTMLInputElement>;

  inputDate: React.RefObject<HTMLInputElement>;

  inputDrop: React.RefObject<HTMLSelectElement>;

  checkbox: React.RefObject<HTMLInputElement>;

  radioReturn: React.RefObject<HTMLInputElement>;

  radioExchange: React.RefObject<HTMLInputElement>;

  inputFile: React.RefObject<HTMLInputElement>;

  constructor(props: IFormContainerProps) {
    super(props);
    this.inputText = createRef<HTMLInputElement>();
    this.inputDate = createRef<HTMLInputElement>();
    this.inputDrop = createRef<HTMLSelectElement>();
    this.checkbox = createRef<HTMLInputElement>();
    this.radioReturn = createRef<HTMLInputElement>();
    this.radioExchange = createRef<HTMLInputElement>();
    this.inputFile = createRef<HTMLInputElement>();
    this.state = {
      cardCreated: false,
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const validation = this.createValidationObject();
    const { addCard, addValErr } = this.props;
    const valFiltered = Object.entries(validation).filter(
      ([_ignored, value]) => value === false
    );
    const keysWithErr = valFiltered.map(([key, _ignored]) => key);
    if (!Object.values(validation).includes(false)) {
      addCard(validation);
      addValErr([]);
      this.setState({ cardCreated: true });
      setTimeout(() => {
        this.setState({ cardCreated: false });
      }, 3000);
      e.currentTarget.reset();
    } else {
      addValErr(keysWithErr);
    }
    e.preventDefault();
  };

  createValidationObject() {
    return {
      id: Date.now(),
      title: validateTitle(this.inputText),
      date: validateDate(this.inputDate),
      reason: validateReason(this.inputDrop),
      concent: validateConcent(this.checkbox),
      radio: validateRadio(this.radioReturn, this.radioExchange),
      inputFile: validateFile(this.inputFile),
    };
  }

  render() {
    const { cardCreated } = this.state;
    return (
      <FormComponent
        handleSubmit={this.handleSubmit}
        inputText={this.inputText}
        inputDate={this.inputDate}
        inputDrop={this.inputDrop}
        concent={this.checkbox}
        radioReturn={this.radioReturn}
        radioExchange={this.radioExchange}
        inputFile={this.inputFile}
        cardCreated={cardCreated}
      />
    );
  }
}
export default FormContainer;
