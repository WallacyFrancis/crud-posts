import axios from "axios";

const api = axios.create({
  baseURL: 'https://crud-posts-api.herokuapp.com/'
});

export const get = async () => {
  try {
    return api.get();
  } catch(e) {
    console.log(e);
  }
}

export const post = async (endpoint, body) => {
  try {
    return api.post(endpoint, body);
  } catch(e) {
    console.log(e);
  }
}

export const getOne = async (endpoint) => {
  try {
    return api.get(endpoint);
  } catch(e) {
    console.log(e);
  }
}

export const update = async (id, body) => {
  try {
    return api.put(id, body);
  } catch(e) {
    console.log(e);
  }
}

export const exclude = async (endpoint) => {
  try {
    return api.delete(endpoint);
  } catch(e) {
    console.log(e);
  }
}
