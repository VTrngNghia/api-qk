import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";
var happyGameInstance = axios.create(axiosBaseConfig);
export default happyGameInstance;
