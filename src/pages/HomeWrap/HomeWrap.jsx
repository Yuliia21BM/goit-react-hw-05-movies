import { useState, useEffect } from 'react';

import { Container, HomeTitle } from './HomeWrap.styled';
import { getPopularFilm } from '../../fetchApi';
import { Movielist } from '../../components/MovieList/MovieList';
import { Spinner } from '../../components/Spenner-loader/Spinner-loader';

const HomeWrap = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTrending = async () => {
    try {
      setIsLoading(true);
      const { results } = await getPopularFilm();
      if (!results || results === []) {
        setMovies([]);
        setIsLoading(false);
        return;
      }
      setMovies(results);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <Container>
      <HomeTitle>Trending today</HomeTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <Movielist movies={movies} isMoviePath={true} />
      )}
    </Container>
  );
};

export default HomeWrap;
