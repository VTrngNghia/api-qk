import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";
import { IApiInstance } from "../types/axios-instance";

const happyGameAxiosInstance: IApiInstance = axios.create(axiosBaseConfig);

export default happyGameAxiosInstance;
