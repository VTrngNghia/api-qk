import happyTimeInstance from "../../instances/happytime";
var employee = {
    get: function (params) { return happyTimeInstance.get("/employees"); }
};
export default employee;
