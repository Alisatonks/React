import React, { ChangeEvent, useEffect, useRef } from 'react';
import { ISearchBarProps } from 'types/types';
import getAllCharacters from './apiFunctions';

const SearchBar: React.FC<ISearchBarProps> = function SearchBar(props) {
  const { setCardsData, setIsLoading } = props;
  const inputRef = useRef(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    // console.log(inputRef.current ? '1' : '0');
    getAllCharacters(setCardsData, setIsLoading);
  }, []);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };

  const onSearch = () => {
    localStorage.setItem('inputValue', inputRef.current);
    console.log(inputRef.current);
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
      <button type="button" className="search__btn" onClick={onSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
