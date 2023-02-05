import { useState, useEffect } from 'react';

import { Container, HomeTitle } from './HomeWrap.styled';
import { getPopularFilm } from '../../fetchApi';
import { Movielist } from '../../components/MovieList/MovieList';

const HomeWrap = () => {
  const [movies, setMovies] = useState([]);
  const getTrending = async () => {
    try {
      const { results } = await getPopularFilm();
      if (!results || results === []) {
        setMovies([]);
        return;
      }
      setMovies(results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTrending();
  }, []);
  return (
    <Container>
      <HomeTitle>Trending today</HomeTitle>
      <Movielist movies={movies} isMoviePath={true} />
    </Container>
  );
};

export default HomeWrap;
