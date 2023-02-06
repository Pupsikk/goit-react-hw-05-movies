import { useState, useEffect } from 'react';

import { fetchGetTrending } from '../../FetchMovies/FetchMovies';
import { Link } from 'react-router-dom';
// import * as MovieAPI from '../../FetchMovies/FetchMovies';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchGetTrending().then(setTrendingMovies);
  }, []);
  return (
    <div>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
