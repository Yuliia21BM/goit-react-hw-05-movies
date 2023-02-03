// import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { MovieInfo } from '../pages/MovieInfo/MovieInfo';
// const MovieWrap = lazy(() => import('../pages/MovieWrap/MovieWrap'));
// const MovieInfo = lazy(() => import('../pages/MovieInfo/MovieInfo'));

export const App = () => {
  return (
    <>
      <SharedLayout />
      <MovieInfo></MovieInfo>
    </>
    // <Routes>
    //   <Route path="/" element={<SharedLayout />}>
    //     <Route index element={<HomeWrap />} />
    //     <Route path="/movieWrap" element={<MovieWrap />}></Route>
    //     <Route path="/movieInfo" element={<MovieInfo />}></Route>
    //   </Route>
    // </Routes>
  );
};
