import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchMovieCasts } from '../../fetchApi';
import {
  CastList,
  CastItem,
  CastName,
  CastDefaultText,
} from './MovieCast.styled';
import defaultImage from '../../images/default-img.jpg';

const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    if (!id) return;
    searchMovieCasts(id).then(({ cast }) => setCast(cast));
  }, [id]);
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <CastList>
      {cast.length !== 0 ? (
        cast.map(item => {
          return (
            <CastItem key={`${item.id}12345ab67${Math.random(4)}`}>
              <img
                width="100%"
                src={
                  item.profile_path
                    ? POSTER_URL + item.profile_path
                    : defaultImage
                }
                alt={item.name ? item.name : 'Unknown'}
                loading="lazy"
              ></img>
              <CastName>{item.name ? item.name : 'Unknown'}</CastName>
              <p>{item.character ? item.character : 'Uncnown'}</p>
            </CastItem>
          );
        })
      ) : (
        <CastDefaultText>
          Sorry, we don`t have cast for thit movie :(
        </CastDefaultText>
      )}
    </CastList>
  );
};

export default MovieCast;
