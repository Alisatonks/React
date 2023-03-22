import React, { ChangeEvent } from 'react';
import { IState, IProps } from '../types/types';

class SearchBar extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.state = {
      inputText: localStorage.getItem('inputValue') || '',
    };
  }

  componentDidMount() {
    const valueInStore: string = localStorage.getItem('inputValue') || '';
    this.setState({ inputText: valueInStore || '' });
  }

  componentWillUnmount(): void {
    const { inputText } = this.state;
    localStorage.setItem('inputValue', inputText);
  }

  onChangeValue(e: ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    this.setState({
      inputText: target.value,
    });
  }

  render() {
    const { inputText } = this.state;
    return (
      <form className="search__form">
        <input
          type="text"
          name="search"
          placeholder="Enter your text"
          className="search__input"
          value={inputText}
          onChange={this.onChangeValue}
        />
        <button type="button" className="search__btn">
          Search
        </button>
      </form>
    );
  }
}
export default SearchBar;
