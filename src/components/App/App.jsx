import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Movies from '../Movies/Movies.jsx';

function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={
          <>
            <Header background={"header_place_main"} />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/movies" element={
          <>
            <Header background={"header_place_movies"} />
            <Movies />
            <Footer />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
