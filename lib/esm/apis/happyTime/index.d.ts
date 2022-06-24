declare const happyTimeApi: {
    auth: {
        login: (body: import("./auth.type").ILoginRequest) => Promise<import("axios").AxiosResponse<import("./auth.type").ILoginResponse, any>>;
        logout: () => Promise<import("axios").AxiosResponse<any, any>>;
    };
    employee: {
        get: (params: import("./employee.type").IEmployeeGetRequest) => Promise<import("axios").AxiosResponse<import("./employee.type").IEmployeeGetResponse, any>>;
    };
};
export default happyTimeApi;
