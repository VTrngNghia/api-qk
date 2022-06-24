import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";

const happyTimeInstance = axios.create(axiosBaseConfig)

happyTimeInstance.interceptors.request.use(config => {
    console.log("API base request interceptor")
    return config
})

export default happyTimeInstance
