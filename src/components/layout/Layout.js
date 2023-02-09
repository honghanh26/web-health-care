import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";

import './layout.css';

import Header from './Header';
import Footer from './Footer';
import Top from '../../pages/Top';
import Record from '../../pages/Record';
import Column from '../../pages/Column';

function Layout() {
  const topRef = useRef();
  const handleBackClick = () => {
    topRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div ref={topRef}></div>
      <Header />
      <div className="container position-relative">
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
        <div className="btn-top position-fixed" onClick={handleBackClick}></div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
