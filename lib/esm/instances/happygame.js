import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";
var happyGameAxiosInstance = axios.create(axiosBaseConfig);
export default happyGameAxiosInstance;
