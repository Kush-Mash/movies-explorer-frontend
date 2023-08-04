import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [allMovies, setAllMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const location = useLocation().pathname;
  const locationWithHeader = ["/", "/movies", "/saved-movies", "/profile"];
  const locationWithFooter = ["/", "/movies", "/saved-movies"];

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
      });
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
        {locationWithHeader.includes(location) && <Header loggedIn={loggedIn} />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={<ProtectedRoute element={Movies} allMovies={allMovies} />}
          />
          <Route
            path="/saved-movies"
            element={<ProtectedRoute element={SavedMovies} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={Profile} logout={logout} />}
          />
          <Route path="/signup" element={<Register loggedIn={loggedIn} />} />
          <Route path="/signin" element={<Login />} />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
        {locationWithFooter.includes(location) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
