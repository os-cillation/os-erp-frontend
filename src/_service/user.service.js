import { axios, handleResponse, handleError, logout } from "./_common.service";

export default {
  login,
  register,
  logout,
  getUser
};

function login(username, password) {
  return axios
    .post("oauth/token", { name: username, password: password })
    .then(handleResponse, handleError)
    .then(user => setUser(user));
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

function setUser(user) {
  if (user.token) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  return Promise.resolve(user);
}

function getUser() {
  if (!localStorage.getItem("user")) {
    return null;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  if (user.token) {
    return user;
  }

  return null;
}
