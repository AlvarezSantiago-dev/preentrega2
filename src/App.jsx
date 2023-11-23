import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer, ItemListContainer, NavBar } from './components';
export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:category' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
