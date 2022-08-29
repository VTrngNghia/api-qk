import happyTimeAxiosInstance from "../../instances/happytime";
var employee = {
  get: function (params) {
    return happyTimeAxiosInstance.get("/employees");
  },
};
export default employee;
