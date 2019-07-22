import request from "../Utils/request";

export function getAllCatelog() {
  return request({
    url: "/api/catelogs",
    method: "GET"
  });
}
