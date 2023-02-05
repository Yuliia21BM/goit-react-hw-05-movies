import { useState, useEffect, useRef } from 'react';
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
  const reviewRef = useRef();

  useEffect(() => {
    setIsLoading(true);
    if (!id) return;
    searchMovieReviews(id).then(({ results }) => {
      if (!results || results === []) setReview([]);
      setReview(results);
      reviewRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsLoading(false);
    });
  }, [id]);
  return (
    <>
      <RewiewList ref={reviewRef}>
        {isLoading ? (
          <Spinner />
        ) : review.length !== 0 ? (
          review.map(item => {
            return (
              <li key={item.id}>
                <ReviewerTitle>
                  Author:{' '}
                  <ReviewName>{item.author_details.username} </ReviewName>
                </ReviewerTitle>
                <p>{item.content}</p>
              </li>
            );
          })
        ) : (
          <RevievDefaultText>
            Sorry, we don`t have reviews for thit movie
          </RevievDefaultText>
        )}
      </RewiewList>
    </>
  );
};

export default MovieReview;
