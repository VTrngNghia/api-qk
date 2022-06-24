import axios from "axios";
import axiosBaseConfig from "../config/axiosBaseConfig";

const happyTimeInstance = axios.create(axiosBaseConfig)

export default happyTimeInstance
