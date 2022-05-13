import Home from './Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';
import SearchResults from './SearchResults';
import Recipe from './Recipe';

const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/search/:query' element={<SearchResults />} />
      <Route path='/recipe/:id' element={<Recipe />} />
    </Routes>
  );
};

export default Pages