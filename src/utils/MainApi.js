export const BASE_PATH = 'https://api.kush-mash.nomoreparties.sbs';

class MainApi {
  constructor({ basePath }) {
    this._basePath = basePath;
  }

  _getJson(res) {
    if (res.ok) { return res.json() }
    return Promise.reject(res.status);
  }

  _getHeaders() {
    const token = localStorage.getItem('jwt');
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...this._headers,
    }
  }

    getCurrentUser() {
      return fetch(`${this._basePath}/users/me`, {
        headers: this._getHeaders()
      }).then(this._getJson);
    }

    updateUserInfo(name, email) {
      return fetch(`${this._basePath}/users/me`, {
        method: 'PATCH',
        headers: this._getHeaders(),
        body: JSON.stringify({ name, email })
      }).then(this._getJson);
    }

    getSavedMovies() {
      return fetch(`${this._basePath}/movies`, {
        headers: this._getHeaders()
      }).then(this._getJson);
    }

    addMovie(movie) {
      return fetch(`${this._basePath}/movies`, {
        method: 'POST',
        headers: this._getHeaders(),
        body: JSON.stringify(movie)
      }).then(this._getJson);
    }

    deleteMovie(movieId) {
      return fetch(`${this._basePath}/movies/${movieId}`, {
        method: 'DELETE',
        headers: this._getHeaders()
      }).then(this._getJson);
    }
}

export const mainApi = new MainApi({
  basePath: BASE_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});
