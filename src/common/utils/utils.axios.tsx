import axios, { AxiosInstance } from "axios";
import { BACKEND_API_URL } from "common/config";

const axiosAuth: AxiosInstance = axios.create({
    baseURL: BACKEND_API_URL,
});

axiosAuth.interceptors.request.use((config) => {
    config.headers["Content-Type"] = 'application/json';
    config.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default axiosAuth;
