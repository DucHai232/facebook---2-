import axios from "axios";
import { Api } from "../utils/Api";
const API = Api();
export const getUser = () => {
  return API.get("/users"); //gọi api để lấy data
};

export const createUserRequest = (data) => {
  return API.post("/users", data);
};

export const deleteUser = (id) => {
  return API.delete(`/users/${id}`);
};
