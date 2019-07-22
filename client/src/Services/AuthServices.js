import axios from "axios";

const BASE_URL = "http://localhost:3333";

export function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${BASE_URL}/${endpoint}`,
    data: body
  }).catch(error => console.log(error));
}

export function loginByUsername(endpoint, method = "GET", username, password) {
  let formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);

  return axios({
    method: method,
    url: `${BASE_URL}/${endpoint}`,
    data: formData
  }).catch(error => console.log(error));
}