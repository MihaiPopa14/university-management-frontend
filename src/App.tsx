import './index.css';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import React from 'react';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
    </>
  );
}

export default App;
