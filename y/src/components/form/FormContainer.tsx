import React, { createRef } from 'react';
import FormComponent from './FormComponent';
import { IFormContainerProps } from '../../types/types';

class FormContainer extends React.PureComponent<IFormContainerProps> {
  inputText: React.RefObject<HTMLInputElement>;

  constructor(props: IFormContainerProps) {
    super(props);
    this.inputText = createRef<HTMLInputElement>();
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
    if (this.inputText.current) {
      return {
        title: this.inputText?.current?.value,
      };
    }
    return null;
  }

  render() {
    return (
      <FormComponent
        handleSubmit={this.handleSubmit}
        inputText={this.inputText}
      />
    );
  }
}
export default FormContainer;
