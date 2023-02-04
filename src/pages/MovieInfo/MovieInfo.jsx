import { Container } from './MovieInfo.styled';
import { useState, useEffect } from 'react';
import { searchMovieById } from '../../fetchApi';
import { MovieDescription } from '../../components/MovieDesription/MovieDesription';

export const MovieInfo = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getFilmById().then(data => setMovie(data));
  }, []);

  return (
    <Container>
      <MovieDescription data={movie} />
    </Container>
  );
};
const getFilmById = async () => {
  try {
    const results = await searchMovieById(122);
    return results;
  } catch (err) {
    console.log(err);
  }
};
