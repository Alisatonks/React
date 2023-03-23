import React from 'react';
import { IFormProps } from 'types/types';
import InputRadio from './InputRadio';

class FormComponent extends React.PureComponent<IFormProps> {
  render() {
    const {
      handleSubmit,
      inputText,
      inputDate,
      inputDrop,
      concent,
      radioReturn,
      radioExchange,
      inputFile,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter product name" ref={inputText} />
        <input type="date" placeholder="Enter purchase date" ref={inputDate} />
        <label htmlFor="returnReason">
          Choose return reason
          <select name="returnReason" ref={inputDrop}>
            <option>-chose the reason-</option>
            <option>Defect</option>
            <option>Other (didn&apos;t fit, etc)</option>
          </select>
        </label>
        <label htmlFor="concent">
          I have read the terms of Return Policy and agree with it
          <input type="checkbox" name="concent" ref={concent} />
        </label>
        <InputRadio
          htmlFor="radioReturn"
          content="Return money"
          ref1={radioReturn}
          id="radioReturn"
        />
        <InputRadio
          htmlFor="radioExchange"
          content="Exchange to another product"
          ref1={radioExchange}
          id="radioExchange"
        />
        <label htmlFor="loadFile">
          Choose your image
          <input type="file" name="loadFile" ref={inputFile} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default FormComponent;
