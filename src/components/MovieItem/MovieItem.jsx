import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  MovieLi,
  MovieCardDescription,
  CardTitle,
  MovieDate,
} from './MovieItem.styled';

export const MovieItem = ({ data }) => {
  const location = useLocation();
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

  const [movieId, setMovieId] = useState('');

  const hadleMovieClick = e => {
    setMovieId(e.currentTarget.dataset.filmId);
    console.log(movieId);
  };

  return (
    <MovieLi data-film-id={data.id} onClick={hadleMovieClick}>
      <Link to={`${data.id}`} state={{ from: location }}>
        <img
          width="100%"
          src={
            data.poster_path ? POSTER_URL + data.poster_path : ''
            //   defaultPoster.src
          }
          alt={data.title ? data.title : 'Unknown'}
          loading="lazy"
        ></img>
        <MovieCardDescription>
          <CardTitle>{data.title ? data.title : 'Unknown title'}</CardTitle>
        </MovieCardDescription>
        <MovieDate>
          {data.release_date ? data.release_date.slice(0, 4) : 'n/a'}
        </MovieDate>
      </Link>
    </MovieLi>
  );
};
