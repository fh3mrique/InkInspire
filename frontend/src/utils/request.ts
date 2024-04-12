import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { jwtDecode } from "jwt-decode";

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

type Role = "ROLE_OPERATOR" | "ROLE_ADMIN";

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
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

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials
    ? {
        ...config.headers,
        Authorization: "Bearer " + getAuthData().access_token,
      }
    : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers: headers });
};

export const saveAuthData = (obj: LoginResponse) => {
  localStorage.setItem("AuthData", JSON.stringify(obj));
};

export const getAuthData = () => {
  const str = localStorage.getItem("AuthData") ?? "{}";
  const obj = JSON.parse(str);

  return obj as LoginResponse;
};

export const removeAuthData = () => {
  localStorage.removeItem('AuthData');
}

/* export const isAuthenticated = (): boolean => {
  const authData = getAuthData();
  // Verifica se há dados de autenticação e se o token de acesso está presente e não está vazio
  return !!authData && !!authData.access_token;
}; */

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    console.log("INTECPTOR ANTES DA REQUISIÇÃO");
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("INTECPTOR ANTES DA REQUISIÇÃO");
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("INTECPTOR RESPOSTA COM SUCESSO");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("INTECPTOR RESPOSTA COM ERROR");
    return Promise.reject(error);
  }
);

/* Função que pega o jwt do local storage e decodifica usando a lib jwt decoder */
export const getTokenData = (): TokenData | undefined => {
  const loginResponse = getAuthData();

  try {
    return jwtDecode(loginResponse.access_token) as TokenData;
  } catch (error) {
    return undefined;
  }
};

export const isAuthenticated = (): boolean => {
  const tokenData = getTokenData();

  return tokenData && tokenData.exp * 1000 > Date.now() ? true : false;
};

export const hasAnyRole = (roles: Role[]): boolean => {
  if (roles.length === 0) {
    return true;
  }

  const tokenData = getTokenData();

  if (tokenData !== undefined) {
    for (var i = 0; i < roles.length; i++) {
      if (tokenData.authorities.includes(roles[i])) {
        return true;
      }
    }
  }

  return false;
};
