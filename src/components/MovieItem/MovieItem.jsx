import {
  MovieLi,
  MovieCardDescription,
  CardTitle,
  MovieDate,
} from './MovieItem.styled';

export const MovieItem = ({ data }) => {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

  return (
    <MovieLi>
      <img
        width="100%"
        src={
          data.poster_path ? POSTER_URL + data.poster_path : ''
          //   defaultPoster.src
        }
        alt={data.title ? data.title : 'Unknown'}
        loading="lazy"
      ></img>
      <MovieCardDescription data-film-id={data.id}>
        <CardTitle>{data.title ? data.title : 'Unknown title'}</CardTitle>
      </MovieCardDescription>
      <MovieDate>
        {data.release_date ? data.release_date.slice(0, 4) : 'n/a'}
      </MovieDate>
    </MovieLi>
  );
};
