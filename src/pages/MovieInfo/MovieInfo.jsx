import { Container } from './MovieInfo.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { searchMovieById } from '../../fetchApi';
import { BtnGoBack } from '../../components/BtnGoBack/BtnGoBack';
import { MovieDescription } from '../../components/MovieDesription/MovieDesription';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const { id } = useParams();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!id) return;
    getFilmById(id).then(data => setMovie(data));
  }, [id]);

  return (
    <Container>
      <BtnGoBack to={backLinkHref}>Back to movies</BtnGoBack>
      {movie !== {} && <MovieDescription data={movie} />}
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

export default MovieInfo;
