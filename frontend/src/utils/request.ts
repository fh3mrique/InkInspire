import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";

export const BASE_URL = "http://localhost:8080";

const CLIENT_ID = "inkispire";
const CLIENT_SECRET = "inkispire123";

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userId: number;
};

const basicHeader = () =>
  "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET);

type LoginData = {
  username: string;
  password: string;
};

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: basicHeader(),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: "password",
  });

  return axios({
    method: "POST",
    baseURL: BASE_URL,
    url: "/oauth/token",
    data: data,
    headers: headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) =>{
  return axios({...config, baseURL: BASE_URL});
}

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem("AuthData", JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem("AuthData") ?? "{}";
  const obj = JSON.parse(str);

  return obj as LoginResponse;
}
