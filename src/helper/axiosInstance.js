import axios from "axios";
import { BASE_URL } from "./constant";

export const axiosInstance = axios.create({
    baseURL:BASE_URL,
    timeout:10000,
    headers:{
        "Content-Type":"application/json"
    }
});

axiosInstance.interceptors.request.use(
    (response) => {
  const accessToken = localStorage.getItem("token");

  if (accessToken) {
    response.headers.Authorization = `Bearer ${accessToken}`;
  }

  return response;
},
(error)=>{
    return Promise.reject(error);
});


