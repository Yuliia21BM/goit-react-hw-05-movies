import { MovieItem } from '../../components/MovieItem/MovieItem';
import { MovieUl } from './MovieList.styled';

export const Movielist = ({ movies, isMoviePath }) => {
  return (
    <MovieUl>
      {movies !== [] ? (
        movies.map(movie => {
          return (
            <MovieItem key={movie.id} data={movie} isMoviePath={isMoviePath} />
          );
        })
      ) : (
        <div>Something went wrong :(</div>
      )}
    </MovieUl>
  );
};
