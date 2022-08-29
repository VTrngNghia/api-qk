import { ILoginRequest, ILoginResponse } from "./auth.type";
declare const auth: {
  login: (
    body: ILoginRequest,
  ) => Promise<import("axios").AxiosResponse<ILoginResponse, any>>;
  logout: () => Promise<import("axios").AxiosResponse<any, any>>;
};
export default auth;
