import axios from "axios";

const BASE_URL = "http://localhost:3333";

export default function callApi(endpoint, method = "GET", body, config) {
  return axios({
    method: method,
    url: `${BASE_URL}/${endpoint}`,
    data: body,
    config: config
  }).catch(error => console.log(error));
}
