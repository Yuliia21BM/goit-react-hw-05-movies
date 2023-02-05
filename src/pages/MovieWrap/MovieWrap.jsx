import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByName } from '../../fetchApi';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Movielist } from '../../components/MovieList/MovieList';
import { Container } from './MovieWrap.styled';

const MovieWrap = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('title') ?? '';
  const [request, setRequest] = useState(movieName ? movieName : '');
  const [movies, setMovies] = useState([]);

  const updateQueryString = title => {
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
    setRequest(title);
  };

  useEffect(() => {
    if (!request || request === '') return;
    searchMovieByName(request).then(({ results }) => setMovies(results));
  }, [request]);

  const handleSubmitForm = requestVal => {
    if (!requestVal || requestVal === '') return;
    setRequest(requestVal);
    updateQueryString(requestVal);
  };
  return (
    <Container>
      <SearchBar onSubmit={handleSubmitForm} />
      <Movielist movies={movies} />
    </Container>
  );
};
export default MovieWrap;
