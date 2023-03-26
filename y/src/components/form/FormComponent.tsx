import React from 'react';
import { IFormProps } from 'types/types';
import InputRadio from './InputRadio';
import ValidationContext from './Context';

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
      cardCreated,
    } = this.props;
    return (
      <ValidationContext.Consumer>
        {(validationErrors) => (
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Enter product name"
              ref={inputText}
            />
            <div className="valError">
              {validationErrors && validationErrors.includes('title')
                ? 'The name should start from the capital letter and be at least 3 chars long'
                : null}
            </div>
            <label htmlFor="date">
              Enter purchase date
              <input type="date" ref={inputDate} name="date" />
              <div className="valError">
                {validationErrors && validationErrors.includes('date')
                  ? 'Please enter tha past date'
                  : null}
              </div>
            </label>
            <label htmlFor="returnReason">
              Choose return reason
              <select name="returnReason" ref={inputDrop}>
                <option>-choose the reason-</option>
                <option>Defect</option>
                <option>Other (didn&apos;t fit, etc)</option>
              </select>
              <div className="valError">
                {validationErrors && validationErrors.includes('reason')
                  ? 'Please choose the reason of return'
                  : null}
              </div>
            </label>
            <label htmlFor="concent">
              I have read the terms of Return Policy and agree with it
              <input
                type="checkbox"
                name="concent"
                className="form__checkbox"
                ref={concent}
              />
              <div className="valError">
                {validationErrors && validationErrors.includes('concent')
                  ? 'Please read the return policy and if you agree mark the checkbox'
                  : null}
              </div>
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
            <div className="valError">
              {validationErrors && validationErrors.includes('radio')
                ? 'Please choose return option'
                : null}
            </div>
            <label htmlFor="loadFile">
              Choose your image
              <input
                type="file"
                name="loadFile"
                className="input-file"
                accept="image/jpeg,image/png,image/gif"
                ref={inputFile}
              />
              <div className="valError">
                {validationErrors && validationErrors.includes('inputFile')
                  ? 'Please choose an image'
                  : null}
              </div>
            </label>
            <button type="submit" className="form__submit">
              Submit
            </button>
            {cardCreated && (
              <div className="form__message">
                The card has been successfully created!
              </div>
            )}
          </form>
        )}
      </ValidationContext.Consumer>
    );
  }
}
export default FormComponent;
