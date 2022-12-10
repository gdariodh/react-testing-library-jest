import axios from "axios";

export const callEndPoint = (data) => {
  return axios
    .post("https://rickandmortyapi.com/api/character/2", data)
    .then((res) => res.data);
};
