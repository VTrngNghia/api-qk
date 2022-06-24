import axios from "axios";
import axiosBaseConfig from "../config/axiosBaseConfig";
var happyTimeInstance = axios.create(axiosBaseConfig);
export default happyTimeInstance;
