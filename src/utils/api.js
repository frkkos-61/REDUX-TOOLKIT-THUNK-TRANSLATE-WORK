import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "1e92b00937mshc663d03584ee621p172510jsnace85c2ed25f",
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});

export default api;
