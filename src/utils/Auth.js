export const BASE_PATH = 'https://api.kush-mash.nomoreparties.sbs';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export const getJson = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (name, email, password) => {
  return fetch(`${BASE_PATH}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({name, email, password})
  })
  .then((res) => getJson(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_PATH}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({email, password})
  })
  .then(res => getJson(res))
  .catch(err => console.log(err))
};

export const checkToken = (token) => {
  return fetch(`${BASE_PATH}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => getJson(res))
  .then(data => data)
}
