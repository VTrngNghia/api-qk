import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";
var happyTimeInstance = axios.create(axiosBaseConfig);
happyTimeInstance.interceptors.request.use(function (config) {
    console.log("API base request interceptor");
    return config;
});
export default happyTimeInstance;
