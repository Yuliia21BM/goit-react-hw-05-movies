import { useState, useEffect } from 'react';
import { searchMovieReviews } from '../../fetchApi';
import { useParams } from 'react-router-dom';

import { ReviewerTitle, ReviewName } from './MovieReviews.styled';

export const MovieReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  const [isReview, setIsReview] = useState(true);
  useEffect(() => {
    if (!id) return;
    searchMovieReviews(id).then(({ results }) => {
      if (!results || results === []) {
        setIsReview(false);
      }
      setReview(results);
      setIsReview(true);
    });
  }, [id]);
  return (
    <>
      {!isReview && <p>Sorry, we don`t have reviews</p>}
      {isReview && (
        <ul>
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
        </ul>
      )}
    </>
  );
};
