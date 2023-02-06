// import { Outlet, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import { Header } from './Header/Header';
import { Layout } from './Layout/Layout';
import { Home } from './Home/Home';
// import { MoviesPage } from './Movies/MoviesPage/MoviesPage';
// import { MoviesDetails } from './Movies/MoviesDetails/MoviesDetails';
// import { MoviesCast } from './Movies/MoviesCast/MoviesCast';
// import { MoviesReviews } from './Movies/MoviesReviews/MoviesReviews';
// import { NotFound } from './Movies/NotFound/NotFound';
// import { MoviesPageSearch } from './Movies/MoviesPage/MoviesPageSearch';
import { lazy } from 'react';

const MoviesDetails = lazy(() =>
  import('./Movies/MoviesDetails/MoviesDetails')
);
const MoviesCast = lazy(() => import('./Movies/MoviesCast/MoviesCast'));
const MoviesReviews = lazy(() =>
  import('./Movies/MoviesReviews/MoviesReviews')
);
const NotFound = lazy(() => import('./Movies/NotFound/NotFound'));
const MoviesPageSearch = lazy(() =>
  import('./Movies/MoviesPage/MoviesPageSearch')
);

export const App = () => {
  return (
    // <Header />
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Outlet />}>
          <Route index element={<MoviesPage />} /> */}
        <Route path="movies" element={<MoviesPageSearch />}></Route>
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<MoviesCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
