import './index.css';

import { Route, Routes } from 'react-router-dom';

import { Courses } from './components/Courses';
import { Footer } from './components/Footer';
import { Groups } from './components/Groups';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Professors } from './components/Professors';
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
        <Route
          path="/groups"
          element={
            <>
              <Header />
              <Groups />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/courses"
          element={
            <>
              <Header />
              <Courses />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/professors"
          element={
            <>
              <Header />
              <Professors />
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
