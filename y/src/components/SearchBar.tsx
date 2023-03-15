import React from 'react';

class SearchBar extends React.PureComponent {
  render() {
    return (
      <form className="search__form">
        <input
          type="text"
          name="search"
          placeholder="Enter your text"
          className="search__input"
        />
        <button type="submit" className="search__btn">
          Search
        </button>
      </form>
    );
  }
}
export default SearchBar;
