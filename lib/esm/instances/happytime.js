import axios from "axios";
import axiosBaseConfig from "../config/axios-base-config";
var happyTimeAxiosInstance = axios.create(axiosBaseConfig);
happyTimeAxiosInstance.interceptors.request.use(function (config) {
  var _a;
  console.debug(
    (_a = config.method) === null || _a === void 0 ? void 0 : _a.toUpperCase(),
    (config.baseURL || "") + config.url,
    config,
  );
  return config;
}, Promise.reject);
happyTimeAxiosInstance.interceptors.response.use(
  function (response) {
    var _a;
    console.debug(
      response.status,
      (_a = response.config.method) === null || _a === void 0
        ? void 0
        : _a.toUpperCase(),
      (response.config.baseURL || "") + response.config.url,
      response.data,
    );
    return response;
  },
  function (error) {
    var _a, _b, _c, _d, _e, _f, _g;
    console.debug(
      "Base response interceptor error",
      (_a = error.response) === null || _a === void 0 ? void 0 : _a.status,
      (_d =
        (_c =
          (_b = error.response) === null || _b === void 0
            ? void 0
            : _b.config) === null || _c === void 0
          ? void 0
          : _c.method) === null || _d === void 0
        ? void 0
        : _d.toUpperCase(),
      (_f =
        (_e = error.response) === null || _e === void 0
          ? void 0
          : _e.config) === null || _f === void 0
        ? void 0
        : _f.url,
      error,
      ((_g = error.response) === null || _g === void 0 ? void 0 : _g.data) ||
        error.response,
    );
    Promise.reject(error);
  },
);
export default happyTimeAxiosInstance;
