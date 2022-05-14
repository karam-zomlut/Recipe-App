import Home from './Home';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/search/:query' element={<SearchResults />} />
        <Route path='/recipe/:id' element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages