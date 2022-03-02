import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BattlePage } from '../Pages/BattlePage/BattlePage';
import { HomePage } from '../Pages/HomePage/HomePage';
import { InfoPage } from '../Pages/InfoPage/InfoPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/battle' element={<BattlePage />} />
        <Route path='/info' element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
