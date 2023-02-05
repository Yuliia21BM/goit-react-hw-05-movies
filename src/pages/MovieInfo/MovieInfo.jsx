import { Container } from './MovieInfo.styled';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { searchMovieById } from '../../fetchApi';
import { BtnGoBack } from '../../components/BtnGoBack/BtnGoBack';
import { MovieDescription } from '../../components/MovieDesription/MovieDesription';
import { Spinner } from '../../components/Spenner-loader/Spinner-loader';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    setIsLoading(true);
    if (!id) return;
    getFilmById(id).then(data => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [id]);

  return (
    <Container>
      <BtnGoBack to={backLinkHref}>Back to movies</BtnGoBack>
      {isLoading ? (
        <Spinner />
      ) : (
        movie !== {} && <MovieDescription data={movie} />
      )}
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
