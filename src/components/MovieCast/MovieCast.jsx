export const ModieCast = ({ data }) => {
  const POSTER_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <ul>
      {data.map(item => {
        return (
          <li>
            <img
              src={
                data.poster_path ? POSTER_URL + data.poster_path : ''
                //   defaultPoster.src
              }
              alt={data.title ? data.title : 'Unknown'}
              loading="lazy"
            ></img>
            <h1>Name</h1>
            <p>Character: ...</p>
          </li>
        );
      })}
    </ul>
  );
};
