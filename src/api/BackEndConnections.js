import api from "../api";

export async function getToken(inputState) {
  return api.post(`/signin`, inputState)
}