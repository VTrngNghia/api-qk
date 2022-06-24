import EPlatform from "./enums/EPlatform";
import {AxiosRequestConfig} from "axios";

const axiosBaseConfig: AxiosRequestConfig = {
    baseURL: "",
    timeout: 15000,
    headers: {
        platform: EPlatform.web
    },
}

export default axiosBaseConfig
