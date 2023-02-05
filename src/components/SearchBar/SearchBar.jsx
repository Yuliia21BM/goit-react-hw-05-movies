import { useState, useRef, useEffect } from 'react';
import { SearchInput, SearchForm, SearchButton } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [request, setRequest] = useState('');
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(request);
    setRequest('');
  };
  return (
    <SearchForm onSubmit={handleSubmitForm}>
      <SearchInput
        ref={inputElement}
        placeholder="Write some request"
        value={request}
        onChange={e => setRequest(e.currentTarget.value)}
      />
      <SearchButton name="request" type="submit">
        Search
      </SearchButton>
    </SearchForm>
  );
};
