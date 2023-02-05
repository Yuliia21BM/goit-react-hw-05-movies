import { useState } from 'react';
import { SearchInput, SearchForm, SearchButton } from './SearchBar.styled';

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
      <SearchButton name="request" type="submit">
        Search
      </SearchButton>
    </SearchForm>
  );
};
