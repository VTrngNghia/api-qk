import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";

const happyTimeInstance = axios.create(axiosBaseConfig)

export default happyTimeInstance
