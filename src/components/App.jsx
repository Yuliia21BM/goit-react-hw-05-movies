import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomeWrap } from '../pages/HomeWrap/HomeWrap';
const MovieWrap = lazy(() => import('../pages/MovieWrap/MovieWrap'));
const MovieInfo = lazy(() => import('../pages/MovieInfo/MovieInfo'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomeWrap />} />
        <Route path="/movieWrap" element={<MovieWrap />}></Route>
        <Route path="/movieInfo" element={<MovieInfo />}></Route>
      </Route>
    </Routes>
  );
};
