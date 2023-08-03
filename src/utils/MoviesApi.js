const MOVIES_PATH = "https://api.nomoreparties.co";

const getMovies = () =>
  fetch(`${MOVIES_PATH}/beatfilm-movies`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res.status);
    }
  );

export { getMovies, MOVIES_PATH };
