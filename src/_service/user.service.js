import { axios, handleResponse, handleError, logout } from "./_common.service";

export default {
  login,
  register,
  logout,
  getUser,
  getToken
};

function login(username, password) {
  return axios
    .post("oauth/token", { name: username, password: password })
    .then(handleResponse, handleError)
    .then(token => setToken(token));
}

function register(username, email, password, passwordRepeated) {
  return axios
    .post("auth/register", {
      name: username,
      email: email,
      password: password,
      password_confirmation: passwordRepeated
    })
    .then(handleResponse, handleError)
    .then(user => setUser(user));
}

function setToken(token) {
  localStorage.setItem("token", JSON.stringify(token));

  return Promise.resolve(token);
}

function getToken() {
  if (!localStorage.getItem("token")) {
    return null;
  }

  return JSON.parse(localStorage.getItem("token"));
}

function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));

  return Promise.resolve(user);
}

function getUser() {
  if (!localStorage.getItem("user")) {
    return null;
  }

  return JSON.parse(localStorage.getItem("user"));
}
