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

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeWrap />} />
        <Route path="/:id" element={<MovieInfo />}>
          <Route path="movieReview" element={<MovieReview />} />
          <Route path="movieCast" element={<MovieCast />} />
        </Route>
        <Route path="movieWrap" element={<MovieWrap />} />
        <Route path="movieWrap/:id" element={<MovieInfo />}>
          <Route path="movieReview" element={<MovieReview />} />
          <Route path="movieCast" element={<MovieCast />} />
        </Route>
      </Route>
    </Routes>
  );
};
