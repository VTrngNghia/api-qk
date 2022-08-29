import happyTimeAxiosInstance from "../../instances/happytime";
var auth = {
  login: function (body) {
    return happyTimeAxiosInstance.post("/auth/login", body);
  },
  logout: function () {
    return happyTimeAxiosInstance.post("/auth/logout");
  },
};
export default auth;
