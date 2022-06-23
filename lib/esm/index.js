import axios from "axios";
import EPlatform from "./config/EPlatform";
var baseConfig = {
    timeout: 15000,
    headers: {
        platform: EPlatform.web
    },
};
export var happyTime = axios.create(baseConfig);
export var happyGame = axios.create(baseConfig);
var api = {
    happyTime: happyTime,
    happyGame: happyGame
};
export default api;
