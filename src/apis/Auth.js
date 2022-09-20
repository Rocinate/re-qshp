import request from "@/utils/request";

const commonUrl = "SSO";

const login = (params) => {
//   request.interceptors.request.use(
//     (config) => {
//       config.headers["reCAPTCHA"] = params.token;
//       return config;
//     },
//     function (error) {
//       return Promise.reject(error);
//     }
//   );
  return request.post(`${commonUrl / login}`, params);
};

const user = (params) => {
  return request.get(`${commonUrl / user}`, { params: params });
};

export default {
  login,
  user,
};
