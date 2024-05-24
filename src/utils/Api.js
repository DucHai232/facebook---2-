import axios from "axios";

export const Api = () => {
  return axios.create({
    baseURL: "https://664f4d11fafad45dfae33698.mockapi.io/",
  });
};
