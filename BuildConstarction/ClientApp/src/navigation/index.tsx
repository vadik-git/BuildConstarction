import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from '../components';
import { PAGES } from './pages';

const Navigation = () => {
  return (
    <>
      <Header />

      <Routes>
        {PAGES.map((page) => (
          <Route path={page.path} element={<page.conponent />} />
        ))}
      </Routes>
    </>
  );
};

export default Navigation;
