import { useState, useEffect } from 'react';
import { searchMovieReviews } from '../../fetchApi';
import { useParams } from 'react-router-dom';

import { ReviewerTitle, ReviewName, RewiewList } from './MovieReviews.styled';

const MovieReview = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    if (!id) return;
    searchMovieReviews(id).then(({ results }) => {
      if (!results || results === []) return;
      setReview(results);
    });
  }, [id]);
  return (
    <>
      {review !== [] || !review ? (
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
        <p>Sorry, we don`t have reviews for thit movie</p>
      )}
    </>
  );
};

export default MovieReview;
