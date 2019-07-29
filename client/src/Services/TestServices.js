import request from "../Utils/request";

export function getAllCatelog() {
  return request({
    url: "/api/catelogs",
    method: "GET"
  });
}

export function loginByUsername(data) {
  // const formData = new formData();

  // formData.append("username", username);
  // formData.append("password", password);

  return request({
    url: "/api/token",
    method: "POST",
    data: data,
    pgtype: "LOGIN"
  });
}
