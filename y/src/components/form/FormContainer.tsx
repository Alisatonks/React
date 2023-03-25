import React, { createRef } from 'react';
import FormComponent from './FormComponent';
import { IFormContainerProps, CardContainerState } from '../../types/types';
import {
  validateRadio,
  validateTitle,
  validateDate,
  validateFile,
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
      reason:
        this.inputDrop.current?.value !== '-choose the reason-'
          ? this.inputDrop.current?.value
          : false,
      concent: this.checkbox.current?.checked
        ? this.checkbox.current?.checked
        : false,
      radio: validateRadio(this.radioReturn, this.radioExchange),
      inputFile: validateFile(this.inputFile),
    };
  }

  render() {
    const { errors } = this.props;
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
        errors={errors}
        cardCreated={cardCreated}
      />
    );
  }
}
export default FormContainer;
