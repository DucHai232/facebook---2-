import { Api } from "../utils/Api";
const API = Api();
export const getUser = () => {
  return API.get("/api/v1/users"); //gọi api để lấy data
};

export const createUserRequest = (data) => {
  return API.post("/api/v1/users", data);
};
