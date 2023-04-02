import React, { ChangeEvent, useEffect, useRef } from 'react';

const SearchBar: React.FC = function SearchBar() {
  const inputRef = useRef(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    return () => {
      localStorage.setItem('inputValue', inputRef.current);
    };
  }, []);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };
  return (
    <form className="search__form">
      <input
        type="text"
        name="search"
        placeholder="Enter your text"
        className="search__input"
        defaultValue={inputRef.current}
        onChange={onChangeValue}
      />
      <button type="button" className="search__btn">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
