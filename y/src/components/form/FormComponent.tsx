import React from 'react';
import { IFormProps } from 'types/types';

class FormComponent extends React.PureComponent<IFormProps> {
  render() {
    const { handleSubmit, inputText } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter product name" ref={inputText} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default FormComponent;
