import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";
var happyTimeInstance = axios.create(axiosBaseConfig);
export default happyTimeInstance;
