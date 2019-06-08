import { axios, handleResponse, handleError, logout } from "./_common.service";

export default {
  login,
  register,
  logout,
  getUser
};

function login(username, password) {
  const formData = new FormData();

  formData.append("name", username);
  formData.append("password", password);

  return axios
    .post("auth/signin", formData)
    .then(handleResponse)
    .then(user => setUser(user));
}

function register(username, email, password, passwordRepeated) {
  const formData = new FormData();

  formData.append("name", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("password_confirmation", passwordRepeated);

  return axios
    .post("auth/signup", formData)
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
