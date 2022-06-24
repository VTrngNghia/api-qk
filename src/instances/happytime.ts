import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";

const happyTimeInstance = axios.create(axiosBaseConfig)

happyTimeInstance.interceptors.request.use(
    config => {
        console.debug(
            config.method?.toUpperCase(),
            (config.baseURL || "") + config.url,
            config,
        );
        return config;
    },
    Promise.reject
)

happyTimeInstance.interceptors.response.use(
    response => {
        console.debug(
            response.status,
            response.config.method?.toUpperCase(),
            (response.config.baseURL || "") + response.config.url,
            response.data,
        );
        return response;
    },
    error => {
        console.debug(
            "Base response interceptor error",
            error.response?.status,
            error.response?.config?.method?.toUpperCase(),
            error.response?.config?.url,
            error,
            error.response?.data || error.response,
        );

        Promise.reject(error);
    }
)

export default happyTimeInstance
