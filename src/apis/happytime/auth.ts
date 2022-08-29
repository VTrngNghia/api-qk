import happyTimeAxiosInstance from "../../instances/happytime";
import { ILoginRequest, ILoginResponse } from "./auth.type";

const auth = {
  login: (body: ILoginRequest) =>
    happyTimeAxiosInstance.post<ILoginResponse>("/auth/login", body),
  logout: () => happyTimeAxiosInstance.post("/auth/logout"),
};

export default auth;
