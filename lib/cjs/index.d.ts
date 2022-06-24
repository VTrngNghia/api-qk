declare const api: {
    happyTimeApi: {
        auth: {
            login: (body: import("./apis/happyTime/auth.type").ILoginRequest) => Promise<import("axios").AxiosResponse<import("./apis/happyTime/auth.type").ILoginResponse, any>>;
            logout: () => Promise<import("axios").AxiosResponse<any, any>>;
        };
        employee: {
            get: (params: import("./apis/happyTime/employee.type").IEmployeeGetRequest) => Promise<import("axios").AxiosResponse<import("./apis/happyTime/employee.type").IEmployeeGetResponse, any>>;
        };
    };
    happyGameApi: {};
};
export default api;
