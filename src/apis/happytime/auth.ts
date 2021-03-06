import happyTimeInstance from "../../instances/happytime";
import {ILoginRequest, ILoginResponse} from "./auth.type";


const auth = {
    login: (body: ILoginRequest) => happyTimeInstance.post<ILoginResponse>("/auth/login", body),
    logout: () => happyTimeInstance.post("/auth/logout")
}

export default auth
