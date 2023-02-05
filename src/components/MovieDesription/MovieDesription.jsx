import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  DescriptionMovie,
  MovieImage,
  InfoMovie,
  MovieName,
  MovieAverage,
  MovieAddition,
  MovieAdditionalLict,
  AdditionalItem,
} from './MovieDesription.styled';
import defaultPoster from '../../images/default-poster.jpg';

export const MovieDescription = ({ data }) => {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <DescriptionMovie>
        <MovieImage
          src={data.poster_path ? POSTER_URL + data.poster_path : defaultPoster}
          alt={data.title ? data.title : 'Unknown'}
          loading="lazy"
        ></MovieImage>
        <InfoMovie>
          <MovieName>
            {data.title ? data.title : 'Unknown title'} ({' '}
            {data.release_date ? data.release_date.slice(0, 4) : 'n/a'})
          </MovieName>
          <MovieAverage>
            {data.vote_average
              ? data.vote_average.toFixed(1) * 10 + '%'
              : 'n/a'}
          </MovieAverage>
          <div>
            <MovieAddition>Genres: </MovieAddition>
            <p>
              {data.genres
                ? data.genres.map(genre => genre.name).join(', ')
                : 'no genres'}
            </p>
          </div>
          <div>
            <MovieAddition>Description:</MovieAddition>
            <p>{data.overview ? data.overview : 'No description'}</p>
          </div>
          <MovieAddition>Additional information:</MovieAddition>
          <MovieAdditionalLict>
            <li>
              <AdditionalItem to="cast">Cast</AdditionalItem>
            </li>
            <li>
              <AdditionalItem to="reviews">Reviews</AdditionalItem>
            </li>
          </MovieAdditionalLict>
        </InfoMovie>
      </DescriptionMovie>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
