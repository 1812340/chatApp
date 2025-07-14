// import axios from "axios";

// const DB_URL = import.meta.env.VITE_DB_URL;

// export const axiosInstance = axios.create({
//   baseURL: "http://localhost:5000/api/v1",
//   // baseURL: DB_URL,
//   withCredentials: true,
//   headers: {
//     ContentType: "application/json",
//   },
// });


import axios from "axios";

const DB_URL = import.meta.env.VITE_DB_URL;

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  // baseURL: DB_URL,
  withCredentials: true,
  headers: {
    ContentType: "application/json",
  },
});
