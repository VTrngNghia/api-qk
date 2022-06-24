import happyTimeInstance from "../../instances/happyTime";
var employee = {
    get: function (params) { return happyTimeInstance.get("/employees"); }
};
export default employee;
