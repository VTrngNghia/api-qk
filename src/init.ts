import IInitConfig, { TCustomInterceptor } from "./types/init";
import { TInterceptorId } from "./types/axios-instance";
import { isEmpty, pick } from "lodash";
import EFrontToBackCase from "./config/enums/EFrontToBackCase";
import { camelCasify, snakeCasify } from "./utils";
import {
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const init = (config: IInitConfig) => {
  config.instance.defaults.baseURL = config.baseURL;

  const caseConverters = configCaseConverter(
    pick(config, ["instance", "frontToBackCase"]),
  );
  const loggers = configLogger(
    pick(config, ["appName", "instance", "shouldLog"]),
  );

  const requestInterceptorIds = configCustomInterceptors(
    config.instance.interceptors.request,
    config.requestInterceptors,
  );

  const responseInterceptorIds = configCustomInterceptors(
    config.instance.interceptors.response,
    config.responseInterceptors,
  );

  return {
    loggers,
    caseConverters,
    requestInterceptorIds,
    responseInterceptorIds,
  };
};

function configCustomInterceptors<T>(
  manager: AxiosInterceptorManager<T>,
  interceptors?: TCustomInterceptor<T>[],
): TInterceptorId<T>[] {
  return interceptors?.map(interceptor => manager.use(...interceptor)) ?? [];
}

function configCaseConverter({
  instance,
  frontToBackCase,
}: Pick<IInitConfig, "instance" | "frontToBackCase">) {
  let request: TInterceptorId<AxiosRequestConfig> | undefined,
    response: TInterceptorId<AxiosResponse> | undefined;

  let frontToBack, backToFront;

  if (frontToBackCase === EFrontToBackCase.SNAKE_TO_CAMEL) {
    frontToBack = camelCasify;
    backToFront = snakeCasify;
  } else if (frontToBackCase === EFrontToBackCase.CAMEL_TO_SNAKE) {
    frontToBack = snakeCasify;
    backToFront = camelCasify;
  }

  if (frontToBack && backToFront) {
    request = instance.interceptors.request.use(config => {
      if (!isEmpty(config.data)) {
        config.data = frontToBack(config.data);
      }
      if (!isEmpty(config.params)) {
        config.params = frontToBack(config.params);
      }
      return config;
    });

    response = instance.interceptors.response.use(
      response => {
        response.data = backToFront(response.data);
        return response;
      },
      error => {
        if (!isEmpty(error.response?.data)) {
          error.response.data = backToFront(error.response.data);
        } else {
          error.response = backToFront(error.response);
        }
        throw error;
      },
    );
  }

  return { request, response };
}

function configLogger({
  appName,
  instance,
  shouldLog,
}: Pick<IInitConfig, "appName" | "instance" | "shouldLog">) {
  if (shouldLog) {
    const request = instance.interceptors.request.use(config => {
      console.debug(
        `${appName}`,
        config.method?.toUpperCase(),
        (config.baseURL || "") + config.url,
        config,
      );
      return config;
    });

    const response = instance.interceptors.response.use(
      response => {
        console.debug(
          `${appName}`,
          response.status,
          response.config.method?.toUpperCase(),
          (response.config.baseURL || "") + response.config.url,
          response.data,
        );
        return response;
      },
      error => {
        console.debug(
          `${appName}`,
          error.response?.status,
          error.response?.config?.method?.toUpperCase(),
          error.response?.config?.url,
          error,
          error.response?.data || error.response,
        );

        throw error;
      },
    );

    return { request, response };
  }
  return {};
}

export default init;
