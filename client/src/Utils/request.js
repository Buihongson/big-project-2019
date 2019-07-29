import axios from "axios";
import { getToken, setToken } from "../Utils/token";
import history from "../history";
import { message } from "antd";

// Create an axios instance
const service = axios.create({
  baseURL: "http://localhost:3333/",
  timeout: 20000
});

service.interceptors.request.use(
  config => {
    let token = getToken();

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    const res = response.data;
    if (response.status !== 200) {
      message.error(res.msg);
      return Promise.reject(res.msg);
    } else {
      if (response.config.pgtype === "LOGIN") {
        let authorization = response.headers.authorization;
        let jwt = authorization.substring(7);
        message.success("Successly login");
        return jwt;
      } else {
        if (response.config.method === "POST") {
          message.success("Successly created");
        } else if (response.config.method === "PUT")
          message.success("Successly updated.");
        else if (response.config.method === "DELETE")
          message.success("Successly deleted.");
        return response.data;
      }
    }
  },
  error => {
    if (error.response && error.response.status === 403) {
      switch (error.response.message) {
        case "Username not valid":
          message.error("Username not valid");
          break;
        case "Password not valid":
          message.error("Password not valid");
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default service;
