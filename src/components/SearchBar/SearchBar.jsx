import { useState } from 'react';
import { SearchInput, SearchForm } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [request, setRequest] = useState('');
  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(request);
    setRequest('');
  };
  return (
    <SearchForm onSubmit={handleSubmitForm}>
      <SearchInput
        placeholder="Write some request"
        value={request}
        onChange={e => setRequest(e.currentTarget.value)}
      />
      <button name="request" type="submit">
        Search
      </button>
    </SearchForm>
  );
};
