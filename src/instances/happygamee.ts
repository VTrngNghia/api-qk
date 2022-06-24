import axios from "axios";
import axiosBaseConfig from "../config/axiosBaseConfig";

const happyGameInstance = axios.create(axiosBaseConfig)

export default happyGameInstance
