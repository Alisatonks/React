import React, { ChangeEvent, useEffect, useRef } from 'react';
import { ISearchBarProps, RootState } from 'types/types';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from './apiFunctions';
import { setInputValue } from '../redux/searchReducer';

const SearchBar: React.FC<ISearchBarProps> = function SearchBar(props) {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => {
    return state;
  });
  const { setCardsData, setIsLoading } = props;
  const inputRef = useRef('');

  useEffect(() => {
    const searchInput = search;
    console.log(searchInput);
    if (searchInput.length) {
      getCharacters(setCardsData, setIsLoading, 'search', searchInput);
    } else {
      getCharacters(setCardsData, setIsLoading, 'all');
    }
  }, [setCardsData, setIsLoading, search]);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };

  const onSearch = () => {
    dispatch(setInputValue(inputRef.current));
    // localStorage.setItem('inputValue', inputRef.current);
    const searchInput = search;
    console.log(searchInput);
    if (searchInput && searchInput.length) {
      getCharacters(setCardsData, setIsLoading, 'search', searchInput);
    } else {
      getCharacters(setCardsData, setIsLoading, 'all');
    }
  };

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      onSearch();
    }
  }

  return (
    <div className="search__form">
      <input
        type="text"
        name="search"
        placeholder="Enter your text"
        className="search__input"
        defaultValue={search || ''}
        onChange={onChangeValue}
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="search__btn" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
