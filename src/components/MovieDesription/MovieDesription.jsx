import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
  DescriptionMovie,
  MovieImage,
  InfoMovie,
} from './MovieDesription.styled';

export const MovieDescription = ({ data }) => {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <DescriptionMovie>
        <MovieImage
          src={
            data.poster_path ? POSTER_URL + data.poster_path : ''
            //   defaultPoster.src
          }
          alt={data.title ? data.title : 'Unknown'}
          loading="lazy"
        ></MovieImage>
        <InfoMovie>
          <h1>
            {data.title ? data.title : 'Unknown title'} ({' '}
            {data.release_date ? data.release_date.slice(0, 4) : 'n/a'})
          </h1>
          <p>
            User Score{' '}
            {data.vote_average
              ? data.vote_average.toFixed(1) * 10 + '%'
              : 'n/a'}
          </p>
          <h3>
            Genres:{' '}
            {data.genres
              ? data.genres.map(genre => genre.name).join(', ')
              : 'no genres'}
          </h3>
          <p>{data.overview ? data.overview : 'No description'}</p>
        </InfoMovie>
      </DescriptionMovie>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="movieCast">Cast</Link>
        </li>
        <li>
          <Link to="movieReview">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
