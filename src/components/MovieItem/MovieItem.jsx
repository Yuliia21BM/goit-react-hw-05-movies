import { useLocation } from 'react-router-dom';
import defaultPoster from '../../images/default-poster.jpg';

import {
  MovieLi,
  MovieCardDescription,
  CardTitle,
  MovieDate,
  MovieLink,
} from './MovieItem.styled';

export const MovieItem = ({ data, isMoviePath }) => {
  const location = useLocation();
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieLi data-film-id={data.id}>
      <MovieLink
        to={`${isMoviePath ? `movies/${data.id}` : data.id}`}
        state={{ from: location }}
      >
        <img
          width="100%"
          src={data.poster_path ? POSTER_URL + data.poster_path : defaultPoster}
          alt={data.title ? data.title : 'Unknown'}
          loading="lazy"
        ></img>
        <MovieCardDescription>
          <CardTitle>{data.title ? data.title : 'Unknown title'}</CardTitle>
        </MovieCardDescription>
        <MovieDate>
          {data.release_date ? data.release_date.slice(0, 4) : 'n/a'}
        </MovieDate>
      </MovieLink>
    </MovieLi>
  );
};
