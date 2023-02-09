import React from "react";
import { Route, Routes } from "react-router-dom";

import './layout.css';

import Header from './Header';
import Footer from './Footer';
import Top from '../../pages/Top';
import Record from '../../pages/Record';
import Column from '../../pages/Column';

function Layout() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Top />}
        />
        <Route
          path="/record"
          element={<Record />}
        />
        <Route
          path="/column"
          element={<Column />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default Layout;
