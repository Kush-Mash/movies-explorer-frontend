import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";
import { getMovies, MOVIES_PATH } from "../../utils/MoviesApi.js";
import { mainApi } from "../../utils/MainApi.js";
import * as auth from "../../utils/Auth.js";
import errList from "../../utils/errList.js";
import ProtectedRoute from "../../hooks/ProtectedRoute.js";
import PageNotFound from "../PageNotFound/PageNotFound.jsx";
import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";
import Footer from "../Footer/Footer.jsx";
import Movies from "../Movies/Movies.jsx";
import SavedMovies from "../SavedMovies/SavedMovies.jsx";
import Register from "../Entry/Register.jsx";
import Login from "../Entry/Login.jsx";
import Profile from "../Profile/Profile.jsx";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [errMess, setErrMess] = useState({ err: false, mess: "" });
  const [isEditable, setIsEditable] = useState(false);
  const [allMovies, setAllMovies] = useState([]);
  const [addedMovies, setAddedMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [isShortAdded, setIsShortAdded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTermInAdded, setSearchTermInAdded] = useState("");


  const location = useLocation().pathname;
  const locationsWithHeader = ["/", "/movies", "/saved-movies", "/profile"];
  const locationsWithFooter = ["/", "/movies", "/saved-movies"];

  const handleLogin = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        navigate("/movies", { replace: true });
        setLoggedIn(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        if (err === 400 || err === 401) {
          setErrMess({ err: true, mess: errList.incorrectLogin });
        }
        if (err === 500) {
          setErrMess({ err: true, mess: errList.serverError });
        }
        console.log(err);
      });
  };

  const handleRegister = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((res) => {
        setCurrentUser(res);
        handleLogin({ email, password });
      })
      .catch((err) => {
        if (err === 400) {
          setErrMess({ err: true, mess: errList.registerError });
        }
        if (err === 409) {
          setErrMess({ err: true, mess: errList.conflict });
        }
        if (err === 500) {
          setErrMess({ err: true, mess: errList.serverError });
        }
        console.log(err);
      });
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser({});
    navigate("/", { replace: true });
  };

  const handleUpdateUser = ({ name, email }) => {
    mainApi
      .updateUserInfo(name, email)
      .then((res) => {
        setCurrentUser(res);
        console.log(res);
      })
      .catch((err) => {
        if (err === 400) {
          setErrMess({ err: true, mess: errList.updateError });
          setIsEditable(true);
        }
        if (err === 409) {
          setErrMess({ err: true, mess: errList.conflict });
          setIsEditable(true);
        }
        if (err === 500) {
          setErrMess({ err: true, mess: errList.serverError });
          setIsEditable(true);
        }
        console.log(err);
      });
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          console.log(err);
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getCurrentUser(), mainApi.getSavedMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          console.log(user);
          console.log(movies);
          setAddedMovies(movies);
          console.log(addedMovies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

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
        localStorage.setItem("movies", JSON.stringify(newMoviesArray));
        setAllMovies(newMoviesArray);
        console.log(newMoviesArray);
      })
      .catch((err) => {
        console.log(err);
        setAllMovies([]);
      });
  };

  const keepMoviesArray = () => {
    if (allMovies < 1) {
      const keepingMovies = JSON.parse(localStorage.getItem("movies"));
      if (!keepingMovies) {
        getMoviesArray();
      } else {
        setAllMovies(keepingMovies);
      }
    }
  };

  const handleAddMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((addedMovie) => {
        if (addedMovie) {
          setAddedMovies([...addedMovies, addedMovie.data]);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteMovie = (movie) => {
    const deletingMovie = addedMovies.find((i) => i.movieId === movie.movieId);
    console.log(deletingMovie);
    mainApi
      .deleteMovie(deletingMovie.id)
      .then(() => {
        setAddedMovies((item) =>
          item.filter((i) => i.movieId !== movie.movieId)
        );
      })
      .catch((err) => console.log(err));
  };

  const isLiked = (movie) =>
    addedMovies.some((addedMovie) => addedMovie.id === movie.id);

  const filterMovies = (movies, searchTerm, isShort) => {
    const takenMovie = movies.filter((movie) =>
    isShort
        ? movie.duration <= 40 &&
          (movie.nameEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase()))
        : movie.nameEN.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.nameRU.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return takenMovie;
  };

  const handleAllMoviesSearch = () => {
    keepMoviesArray();
    filterMovies(
      allMovies,
      searchTerm,
      isShort
    );
  };

  const handleAddedMoviesSearch = () => {
    filterMovies(
      addedMovies,
      searchTermInAdded,
      isShortAdded
    );
  };

  // инпуты
  const handleChangeInAll = (evt) => setSearchTerm(evt.target.value);
  const handleChangeInAdded = (evt) => setSearchTermInAdded(evt.target.value);
  // чекбоксы
  const handleFilterInAll = () => setIsShort(!isShort);
  const handleFilterInAdded = () => setIsShortAdded(!isShortAdded);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Дефолт при смене страницы
  useEffect(() => {
    setErrMess({ err: false, mess: "" });
    setIsEditable(false);
    isMenuOpen && handleMenuToggle();
  }, [location]);

  // // Слушатели для очистки сообщений об ошибках
  // useEffect(() => {
  //   const arr = ["profile__input", "entry__input"];
  //   const handleClearErr = (evt) => {
  //     if (evt.target.classList.some((c) => arr.includes(c))) {
  //       setErrMess({ err: false, mess: "" });
  //     }
  //   };
  //   document.addEventListener("click", handleClearErr);
  //   return () => {
  //     document.removeEventListener("click", handleClearErr);
  //   };
  // });

  const clearErr = () => {
    setErrMess({ err: false, mess: "" });
  };

  // Слушатели для закрытия меню навигации
  useEffect(() => {
    const handleClickCloseMenu = (evt) => {
      if (evt.target.classList.contains("navigation")) {
        handleMenuToggle();
      }
    };

    const handleEscCloseMenu = (evt) => {
      if (isMenuOpen && evt.key === "Escape") {
        handleMenuToggle();
      }
    };

    document.addEventListener("click", handleClickCloseMenu);
    document.addEventListener("keydown", handleEscCloseMenu);

    return () => {
      document.removeEventListener("click", handleClickCloseMenu);
      document.removeEventListener("keydown", handleEscCloseMenu);
    };
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {locationsWithHeader.includes(location) && (
          <Header
            loggedIn={loggedIn}
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
          />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                allMovies={allMovies}
                addMovie={handleAddMovie}
                deleteMovie={handleDeleteMovie}
                isLiked={isLiked}
                isShort={isShort}
                handleChange={handleChangeInAll}
                filter={handleFilterInAll}
                search={handleAllMoviesSearch}
                searchTerm={searchTerm}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                addedMovies={addedMovies}
                addMovie={handleAddMovie}
                deleteMovie={handleDeleteMovie}
                isLiked={isLiked}
                isShort={isShortAdded}
                handleChange={handleChangeInAdded}
                filter={handleFilterInAdded}
                search={handleAddedMoviesSearch}
                searchTerm={searchTermInAdded}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                logOut={logOut}
                handleUpdate={handleUpdateUser}
                errMess={errMess}
                setErrMess={setErrMess}
                isEditable={isEditable}
                setIsEditable={setIsEditable}
                clearErr={clearErr}
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                errMess={errMess}
                clearErr={clearErr}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                handleLogin={handleLogin}
                errMess={errMess}
                clearErr={clearErr}
              />
            }
          />
          <Route exact path="/*" element={<PageNotFound />} />
        </Routes>
        {locationsWithFooter.includes(location) && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
