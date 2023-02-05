import { useState, useEffect } from 'react';
import { searchMovieReviews } from '../../fetchApi';
import { useParams } from 'react-router-dom';
import { Spinner } from 'components/Spenner-loader/Spinner-loader';

import {
  ReviewerTitle,
  ReviewName,
  RewiewList,
  RevievDefaultText,
} from './MovieReviews.styled';

const MovieReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (!id) return;
    searchMovieReviews(id).then(({ results }) => {
      if (!results || results === []) setReview([]);
      setReview(results);
      setIsLoading(false);
    });
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : review.length !== 0 ? (
        <RewiewList>
          {review.map(item => {
            return (
              <li key={item.id}>
                <ReviewerTitle>
                  Author:{' '}
                  <ReviewName>{item.author_details.username} </ReviewName>
                </ReviewerTitle>
                <p>{item.content}</p>
              </li>
            );
          })}
        </RewiewList>
      ) : (
        <RevievDefaultText>
          Sorry, we don`t have reviews for thit movie
        </RevievDefaultText>
      )}
    </>
  );
};

export default MovieReview;
