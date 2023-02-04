import { useState, useEffect } from 'react';
import { searchMovieByName } from '../../fetchApi';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Movielist } from '../../components/MovieList/MovieList';
import { Container } from './MovieWrap.styled';

export const MovieWrap = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!request || request === '') return;
    searchMovieByName(request).then(({ results }) => setMovies(results));
  }, [request]);

  const handleSubmitForm = requestVal => {
    if (!requestVal || requestVal === '') return;
    setRequest(requestVal);
  };
  return (
    <Container>
      <SearchBar onSubmit={handleSubmitForm} />
      <Movielist movies={movies} />
    </Container>
  );
};
