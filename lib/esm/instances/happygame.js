import axios from "axios";
import axiosBaseConfig from "../config/axiosBaseConfig";
var happyGameInstance = axios.create(axiosBaseConfig);
export default happyGameInstance;
