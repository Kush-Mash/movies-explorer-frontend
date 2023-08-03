import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext.js"
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Register from "../Entry/Register.jsx";
import Login from "../Entry/Login.jsx";
import PageNotFound from "../PageNotFound/PageNotFound.jsx";
import Profile from "../Profile/Profile.jsx";
// import Preloader from "../UIComponents/Preloader/Preloader.jsx"
import { getMovies, MOVIES_PATH } from "../../utils/MoviesApi.js";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  function logout() {
    setLoggedIn(false);
  }

  // Получаем массив с фильмами
  const getMoviesArray = () => {
    getMovies()
      .then((moviesArray) => {
        console.log(moviesArray);
        const newMoviesArray = moviesArray.map((movie) => ({
          country: movie.country,
          description: movie.description,
          director: movie.director,
          duration: movie.duration,
          movieId: movie.id,
          image: MOVIES_PATH + movie.image.url,
          nameEN: movie.nameEN,
          nameRU: movie.nameRU,
          trailerLink: movie.trailerLink,
          year: movie.year,
          thumbnail: MOVIES_PATH + movie.image.formats.thumbnail.url,
        }));
        // localStorage.setItem('movies', JSON.stringify(newMoviesArray));
        // setAllMovies(newMoviesArray);
      })
      .catch((err) => {
        console.log(err);
        setAllMovies([]);
      })
  };
  getMoviesArray();

    // // сохряняю все фильмы в стейт
    // const saveAllMovies = () => {
    //   if (allMovies < 1) {
    //     const localStorageMovies = JSON.parse(localStorage.getItem('movies'));
    //     if (!localStorageMovies) {
    //       getMoviesArray();
    //     } else {
    //       getMoviesArray(localStorageMovies);
    //     }
    //   }
    // };

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                <Movies allMovies={allMovies}/>
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
    </CurrentUserContext.Provider>
  );
}

export default App;
