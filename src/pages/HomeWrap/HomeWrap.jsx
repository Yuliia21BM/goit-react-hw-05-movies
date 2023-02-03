import { useState, useEffect } from 'react';

import { Container, HomeTitle } from './HomeWrap.styled';
import { getPopularFilm } from '../../fetchApi';
import { Movielist } from '../../components/MovieList/MovieList';
import { MovieItem } from '../../components/MovieItem/MovieItem';

export const HomeWrap = () => {
  const [movies, setMovies] = useState([]);
  const getTrending = async () => {
    try {
      const { results } = await getPopularFilm();
      console.log(results);
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
      <Movielist>
        {movies !== [] ? (
          movies.map(movie => {
            return <MovieItem key={movie.id} data={movie} />;
          })
        ) : (
          <div>Something went wrong :(</div>
        )}
      </Movielist>
    </Container>
  );
};
