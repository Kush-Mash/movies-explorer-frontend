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
  const [allMovies, setAllMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [errMess, setErrMess] = useState({ err: false, mess: '' });
  const [isEditable, setIsEditable] = useState(false);

  const location = useLocation().pathname;
  const locationsWithHeader = ["/", "/movies", "/saved-movies", "/profile"];
  const locationsWithFooter = ["/", "/movies", "/saved-movies"];

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getCurrentUser(), getMovies()])
        .then(([user, movies]) => {
          setCurrentUser(user);
          console.log(movies);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    tokenCheck();
  }, []);

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
        console.log(err)});
  };

  const handleRegister = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((res) => {
        setCurrentUser(res);
        handleLogin({ email, password })
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
      })
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
        if (err.includes('400')) {
          setErrMess({ err: true, mess: errList.updateError });
          setIsEditable(true);
        }
        if (err.includes('409')) {
          setErrMess({ err: true, mess: errList.conflict });
          setIsEditable(true);
        }
        if (err.includes('500')) {
          setErrMess({ err: true, mess: errList.serverError });
          setIsEditable(true);
        }
        console.log(err);
      });
  };

  // Слушатели для очистки сообщений об ошибках
  useEffect(() => {
    setErrMess({ err: false, mess: '' });
    setIsEditable(false);
  }, [location])

  useEffect(() => {
    const handleClearErr = (evt) => {
      if (evt.target.classList.contains(("entry__input") || ("profile__input"))) {
        setErrMess({ err: false, mess: '' });
      }
    }
    document.addEventListener("click", handleClearErr);
    return () => {
      document.removeEventListener("click", handleClearErr);
    }
  })

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
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

  React.useEffect(() => {
    isMenuOpen && handleMenuToggle();
  }, [location]);

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
                allMovies={allMovies}
                loggedIn={loggedIn}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute element={SavedMovies} loggedIn={loggedIn} />
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
              />
            }
          />
          <Route
            path="/signup"
            element={
              <Register
                handleRegister={handleRegister}
                errMess={errMess}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                handleLogin={handleLogin}
                errMess={errMess}
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
