export const BASE_PATH = 'https://api.kush-mash.nomoreparties.sbs';

class MainApi {
  constructor({ basePath }) {
    this._basePath = basePath;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
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
        method: "PATCH",
        headers: this._getHeaders(),
        body: JSON.stringify({ name, email })
      }).then(this._getJson);
    }
}

export const mainApi = new MainApi({
  basePath: BASE_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});
