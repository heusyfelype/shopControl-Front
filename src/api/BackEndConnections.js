import api from "../api";

export function getToken(inputState) {
  return api.post(`/signin`, inputState)
}

export function createUser(inputState) {
  return api.post("/signup", inputState)
}

export function getItems(token) {
  const config = _configHeaders(token)
  return api.get(`/buying`, config)
}

export function updateItem(token, item) {
  const config = _configHeaders(token)
  return api.post(`/buying`, item, config)
}

export function updateAllItems(token, items) {
  const config = _configHeaders(token)
  return api.put(`/buying/update/many`, items, config)
}

export function deleteItem(token, id) {
  const config = _configHeaders(token);
  config.headers.id = id;
  return api.delete("/buying", config)
}


function _configHeaders(token) {
  return {
    headers: {
      authorization: token
    }
  }
}