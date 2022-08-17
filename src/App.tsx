import './index.css';

import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import React from 'react';
import { Students } from './components/Students';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/students"
          element={
            <>
              <Header />
              <Students />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
