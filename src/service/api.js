import axios from "axios";

export const api = axios.create({
    baseURL: "https://rellowen-api.onrender.com"
});
