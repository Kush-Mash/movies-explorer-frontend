import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Register from "../Entry/Register.jsx";
import Login from "../Entry/Login.jsx";
import PageNotFound from "../PageNotFound/PageNotFound.jsx";
import Profile from "../Profile/Profile.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  function logout() {
    setLoggedIn(false);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header loggedIn={loggedIn} />
              <Profile logout={logout} />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <Register loggedIn={loggedIn} />
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
