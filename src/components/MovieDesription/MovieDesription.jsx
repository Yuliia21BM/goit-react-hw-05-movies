import { MovieCast } from '../MovieCast/MovieCast';
import { MovieReview } from '../MovieReviews/MovieReviews';
import { useState } from 'react';
import {
  DescriptionMovie,
  MovieImage,
  InfoMovie,
} from './MovieDesription.styled';

export const MovieDescription = ({ data }) => {
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const handleCastClick = () => {
    setAdditionalInfo('cast');
  };
  const handleReviewClick = () => {
    setAdditionalInfo('review');
  };
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
          <a href="#cast" onClick={handleCastClick}>
            Cast
          </a>
        </li>
        <li>
          <a href="#reviews" onClick={handleReviewClick}>
            Reviews
          </a>
        </li>
      </ul>
      {additionalInfo === 'cast' && <MovieCast id={data.id} />}
      {additionalInfo === 'review' && <MovieReview id={data.id} />}
    </>
  );
};
