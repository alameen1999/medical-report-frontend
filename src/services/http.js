import { BASE_URL } from "../api/urls";
import api from "./interceptor";

export const getToken = () => {
  return sessionStorage.getItem("token");
};

const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

function getApiConfig({
  headers = {},
  appConfig = {},
}) {
  const mainConfig = {
    ...axiosConfig,
    headers: {
      ...axiosConfig.headers,
      ...headers,
      Authorization: `Bearer ${getToken()}`,
    },
  };
  if (appConfig.doNotNeedAuthorizationHeader)
    delete mainConfig.headers.Authorization;
  return mainConfig;
}

const ApiCall = (ajaxParams) => api.request(ajaxParams);

export const GET = ({
  url = "",
  params = {},
  headers = {},
  appConfig = {},
}) => {
  if (!url) throw new Error("Please specify a API URL");
  const config = getApiConfig({ headers, appConfig });
  const ajaxParams = {
    ...config,
    url,
    params,
    method: "GET",
  };
  return ApiCall(ajaxParams);
};

export const POST = ({
  url = "",
  params = {},
  data = {},
  headers = {},
  appConfig = {},
}) => {
  if (!url) throw new Error("Please specify a API URL");
  const config = getApiConfig({ headers, appConfig });
  const ajaxParams = {
    ...config,
    url,
    data,
    params,
    method: "POST",
  };
  return ApiCall(ajaxParams);
};

export const PATCH = ({
  url = "",
  params = {},
  data = {},
  headers = {},
  appConfig = {},
}) => {
  if (!url) throw new Error("Please specify a API URL");
  const config = getApiConfig({ headers, appConfig });
  const ajaxParams = {
    ...config,
    url,
    data,
    params,
    method: "PATCH",
  };
  return ApiCall(ajaxParams);
};

export const PUT = ({
  url = "",
  params = {},
  data = {},
  headers = {},
  appConfig = {},
}) => {
  if (!url) throw new Error("Please specify a API URL");
  const config = getApiConfig({ headers, appConfig });
  const ajaxParams = {
    ...config,
    url,
    data,
    params,
    method: "PUT",
  };
  return ApiCall(ajaxParams);
};

export const DELETE = ({
  url = "",
  params = {},
  headers = {},
  appConfig = {},
}) => {
  if (!url) throw new Error("Please specify a API URL");
  const config = getApiConfig({ headers, appConfig });
  const ajaxParams = {
    ...config,
    url,
    params,
    method: "DELETE",
  };
  return ApiCall(ajaxParams);
};
