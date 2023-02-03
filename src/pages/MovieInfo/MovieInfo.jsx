import { useState, useEffect } from 'react';
import { Container } from './MovieInfo.styled';
import { MovieDescription } from '../../components/MovieDesription/MovieDesription';

import { searchMovieById } from '../../fetchApi';

export const MovieInfo = async () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getTrending = async () => {
      try {
        const results = await searchMovieById(15);
        console.log(results);
        if (!results || results === {}) {
          setMovie({});
          return;
        }
        setMovie(results);
        console.log(movie);
      } catch (err) {
        console.log(err);
      }
    };
    getTrending();
  }, [movie]);
  return <Container>{<MovieDescription data={movie} />}</Container>;
};
