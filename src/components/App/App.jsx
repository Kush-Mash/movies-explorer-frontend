import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Register from "../Entry/Register.jsx";
import Login from "../Entry/Login.jsx";
import PageNotFound from "../PageNotFound/PageNotFound.jsx";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header background={"header_place_main"} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header background={"header_place_movies"} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header background={"header_place_movies"} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <Register />
          }
        />
        <Route
          path="/signin"
          element={
            <Login />
          }
        />
        <Route
          exact path='/*'
          element={
            <PageNotFound />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
