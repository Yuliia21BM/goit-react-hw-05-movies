export const MovieDescription = ({ data }) => {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <>
      <div>
        <img
          src={
            data.poster_path ? POSTER_URL + data.poster_path : ''
            //   defaultPoster.src
          }
          alt={data.title ? data.title : 'Unknown'}
          loading="lazy"
        ></img>
        <div>
          <h1>
            {data.title ? data.title : 'Unknown title'} ({' '}
            {data.release_date ? data.release_date.slice(0, 4) : 'n/a'})
          </h1>
          <p>User Score</p>
          <h3>Genres</h3>
          <p>{data.overview ? data.overview : 'No description'}</p>
        </div>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <a href="#cast">Cast</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
      </ul>
    </>
  );
};
