import React, { ChangeEvent, useEffect, useRef } from 'react';
import { ISearchBarProps } from 'types/types';
import { getCharacters } from './apiFunctions';

const SearchBar: React.FC<ISearchBarProps> = function SearchBar(props) {
  const { setCardsData, setIsLoading } = props;
  const inputRef = useRef(localStorage.getItem('inputValue') || '');

  useEffect(() => {
    return () => {
      const search = localStorage.getItem('inputValue');
      if (search) {
        getCharacters(setCardsData, setIsLoading, 'search', search);
      } else {
        getCharacters(setCardsData, setIsLoading, 'all');
      }
    };
  }, [setCardsData, setIsLoading]);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };

  const onSearch = () => {
    localStorage.setItem('inputValue', inputRef.current);
    const search = localStorage.getItem('inputValue');
    if (search && search.length) {
      getCharacters(setCardsData, setIsLoading, 'search', search);
    } else {
      getCharacters(setCardsData, setIsLoading, 'all');
    }
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
