import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";

const happyGameInstance = axios.create(axiosBaseConfig)

export default happyGameInstance
