import React, { ChangeEvent, useRef } from 'react';
import { RootState } from 'types/types';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../redux/searchReducer';

const SearchBar = function SearchBar() {
  const dispatch = useDispatch();
  const { search } = useSelector((state: RootState) => {
    return state;
  });
  const inputRef = useRef('');

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    inputRef.current = e.target.value;
  };

  const onSearch = () => {
    dispatch(setInputValue(inputRef.current));
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
