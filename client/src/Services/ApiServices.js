import axios from "axios";

const BASE_URL = "http://localhost:3333";

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: method,
    url: `${BASE_URL}/${endpoint}`,
    data: body
  }).catch(error => console.log(error));
};