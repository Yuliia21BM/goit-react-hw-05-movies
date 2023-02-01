import { Routes, Route } from 'react-router-dom';

import { Header } from './Header/Header';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}></Route>
    </Routes>
  );
};
