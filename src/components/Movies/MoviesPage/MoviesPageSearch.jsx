import { fetchSearchMovies } from 'FetchMovies/FetchMovies';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MoviesPage } from './MoviesPage';

const MoviesPageSearch = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      fetchSearchMovies(query).then(setMovies);
    }
  }, [query]);

  // const changeParams = params => {
  //   setSearchParams(params !== '' ? { query: params } : {});
  //   setMovies(1);
  // };

  return (
    <>
      {/* <MoviesPage query={query} onSubmit={changeParams} /> */}
      <MoviesPage query={query} />

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPageSearch;
