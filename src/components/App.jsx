import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';

const MovieWrap = lazy(() => import('../pages/MovieWrap/MovieWrap'));
const MovieInfo = lazy(() => import('../pages/MovieInfo/MovieInfo'));
const HomeWrap = lazy(() => import('../pages/HomeWrap/HomeWrap'));
const MovieReview = lazy(() =>
  import('../components/MovieReviews/MovieReviews')
);
const MovieCast = lazy(() => import('../components/MovieCast/MovieCast'));
const DefaultPage = lazy(() => import('../pages/DefaultPage/DefaultPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeWrap />} />
        <Route path="movies" element={<MovieWrap />} />
        <Route path="movies/:id/" element={<MovieInfo />}>
          <Route path="reviews" element={<MovieReview />} />
          <Route path="cast" element={<MovieCast />} />
        </Route>
        <Route path="*" element={<DefaultPage />} />
      </Route>
    </Routes>
  );
};
