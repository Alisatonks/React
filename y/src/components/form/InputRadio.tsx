import React from 'react';
import { InputRadioProps } from '../../types/types';

class InputRadio extends React.PureComponent<InputRadioProps> {
  render() {
    const { htmlFor, content, ref1, id } = this.props;
    return (
      <label htmlFor={htmlFor} className="form__label-radio">
        <input type="radio" ref={ref1} value={content} name="radio" id={id} />
        {content}
      </label>
    );
  }
}
export default InputRadio;
