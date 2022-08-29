import EPlatform from "./enums/EPlatform";
var axiosBaseConfig = {
  baseURL: "",
  timeout: 15000,
  headers: {
    platform: EPlatform.web,
  },
};
export default axiosBaseConfig;
