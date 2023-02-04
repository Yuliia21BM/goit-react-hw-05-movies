import { Container } from './MovieInfo.styled';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { searchMovieById } from '../../fetchApi';
import { MovieDescription } from '../../components/MovieDesription/MovieDesription';

export const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getFilmById(id).then(data => setMovie(data));
  }, [id]);

  return (
    <Container>
      <MovieDescription data={movie} />
    </Container>
  );
};

const getFilmById = async id => {
  try {
    const results = await searchMovieById(id);
    return results;
  } catch (err) {
    console.log(err);
  }
};
