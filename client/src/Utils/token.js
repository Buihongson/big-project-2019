const tokenKey = "Token";

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export function setToken(token) {
  return localStorage.setItem(tokenKey, token);
}

export function clearToken() {
  return localStorage.clear(tokenKey);
}
