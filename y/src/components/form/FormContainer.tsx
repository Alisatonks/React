import React, { createRef } from 'react';
import FormComponent from './FormComponent';
import { IFormContainerProps } from '../../types/types';

class FormContainer extends React.PureComponent<IFormContainerProps> {
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
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const object = this.createObject();
    const { addCard } = this.props;
    if (object) {
      addCard(object);
    }
    e.preventDefault();
  };

  createObject() {
    const file = this.inputFile.current!.files![0];
    return {
      id: Date.now(),
      title: this.inputText!.current!.value,
      date: this.inputDate!.current!.value,
      reason: this.inputDrop!.current!.value,
      concent: this.checkbox!.current!.checked,
      radioReturn: this.radioReturn!.current!.checked,
      radioExchange: this.radioExchange!.current!.checked,
      inputFile: URL.createObjectURL(file),
    };
  }

  render() {
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
      />
    );
  }
}
export default FormContainer;
