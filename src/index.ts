import {IApiInstance} from "./types";
import axios, {AxiosRequestConfig} from "axios";
import EPlatform from "./config/EPlatform";

interface IInitParams extends AxiosRequestConfig {
    baseUrl: string
}

const baseConfig = {
    timeout: 15000,
    headers: {
        platform: EPlatform.web
    },
}

export const happyTime = axios.create(baseConfig)
export const happyGame = axios.create(baseConfig)

const api = {
    happyTime,
    happyGame
}

export default api;
