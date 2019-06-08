import lib from "axios";

const axios = lib.create({
  baseURL: "/api/",
  headers: {
    Accept: "application/json"
  }
});

function handleError(error) {
  return handleResponse(error.response);
}

function handleResponse(response) {
  return new Promise((resolve, reject) => {
    let data = {};

    if (response.headers["content-type"] === "application/json") {
      data = response.data && JSON.parse(response.data);
    }

    if (response && response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      location.reload(true);
    }

    if (response.status < 200 || response.status >= 400) {
      const error = (data && data.message) || response.statusText;

      return reject(error);
    }

    return data;
  });
}

function logout() {
  localStorage.removeItem("user");
}

export { axios, handleResponse, handleError, logout };
