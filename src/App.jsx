import React from "react";
import Pages from './pages/Pages';
import Categories from './components/Categories';
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
