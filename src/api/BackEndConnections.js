import api from "../api";

export function getToken(inputState) {
  return api.post(`/signin`, inputState)
}

export function createUser(inputState) {
  return api.post("/signup", inputState)
}

export function getItems(token) {
  const config = {
    headers: {
      authorization: token
    }
  }
  return api.get(`/buying`, config)
}