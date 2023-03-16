import React from 'react';

class SearchBar extends React.PureComponent {
  //   constructor(props: string) {
  //     super(props);
  //     this.state = {
  //       val: '',
  //     };
  //   }

  //   handler() {
  //     const { val } = this.state;
  //     console.log(val);
  //   }

  render() {
    return (
      <form className="search__form">
        <input
          type="text"
          name="search"
          placeholder="Enter your text"
          className="search__input"
          //   onInput={this.handler}
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </form>
    );
  }
}
export default SearchBar;
