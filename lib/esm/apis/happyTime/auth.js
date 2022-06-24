import happyTimeInstance from "../../instances/happytime";
var auth = {
    login: function (body) { return happyTimeInstance.post("/auth/login", body); },
    logout: function () { return happyTimeInstance.post("/auth/logout"); }
};
export default auth;
