import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import * as auth from "../../utils/Auth.js";
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
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

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

  useEffect(() => {
    tokenCheck();
  }, [])

  const tokenCheck = () => {
    const token = localStorage.getItem('jwt');
    if (token){
      auth.checkToken(token)
        .then((res) => {
          handleLogin();
        })
        .catch((err) => {
          localStorage.removeItem('jwt');
          console.log(err);
        })
    }
  }

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const onAuthSuccess = (res) => {
    localStorage.setItem("jwt", res.token);
    navigate('/movies', {replace: true});
    handleLogin();
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    auth
      .authorize(formValue.email, formValue.password)
      .then((res) => {
        onAuthSuccess(res);
        setFormValue({ email: "", password: "" });
      })
      .catch((err) => console.log(err));
  };

  const handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    auth
      .register(formValue.name, formValue.email, formValue.password)
      .then((res) => {
        onAuthSuccess(res);
        setFormValue({ name: "", email: "", password: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {locationWithHeader.includes(location) && (
          <Header loggedIn={loggedIn} />
        )}
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
          <Route
            path="/signup"
            element={
              <Register
                formValue={formValue}
                handleLogin={handleLogin}
                handleChange={handleChange}
                handleSubmit={handleRegisterSubmit}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                formValue={formValue}
                handleLogin={handleLogin}
                handleChange={handleChange}
                handleSubmit={handleLoginSubmit}
              />
            }
          />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
        {locationWithFooter.includes(location) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
