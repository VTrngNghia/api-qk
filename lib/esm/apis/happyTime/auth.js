import happyTimeInstance from "../../instances/happyTime";
var auth = {
    login: function (body) { return happyTimeInstance.post("/auth/login", body); },
    logout: function () { return happyTimeInstance.post("/auth/logout"); }
};
export default auth;
