import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovieByName } from '../../fetchApi';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Movielist } from '../../components/MovieList/MovieList';
import { Container } from './MovieWrap.styled';
import { Spinner } from '../../components/Spenner-loader/Spinner-loader';

const MovieWrap = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('title') ?? '';
  const [request, setRequest] = useState(movieName ? movieName : '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const updateQueryString = title => {
    const nextParams = title !== '' ? { title } : {};
    setSearchParams(nextParams);
    setRequest(title);
  };

  useEffect(() => {
    if (!request || request === '') return;
    setIsLoading(true);
    searchMovieByName(request).then(({ results }) => {
      setMovies(results);
      setIsLoading(false);
    });
  }, [request]);

  const handleSubmitForm = requestVal => {
    if (!requestVal || requestVal === '') return;
    setRequest(requestVal);
    updateQueryString(requestVal);
  };
  return (
    <Container>
      <SearchBar onSubmit={handleSubmitForm} />
      {isLoading ? (
        <Spinner />
      ) : (
        <Movielist movies={movies} isMoviePath={false} />
      )}
    </Container>
  );
};
export default MovieWrap;
