import axios from "axios";

const baseUrl = process.env.NODE_ENV === "production" ? "/dev" : "/api";
const statusCode = {
  tokenExpire: 401,
  responseSuccess: 200
};

/**
 * 错误处理
 * @param { number } status 状态码
 */
const errorHandle = (status) => {
  switch (status) {
    case statusCode.tokenExpire:
      break;
    case statusCode.parameterInvalid:
      break;
    case statusCode.internalServerError:
      break;
    default:
      break;
  }
};

/**
 * 创建axios实例
 * 设置请求超时 { timeout }
 */
const service = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-type": "application/json"
  }
});

// /**
//  * 请求拦截器
//  * @param { object } config 请求参数
//  */
//  service.interceptors.request.use((config) => {
//     config.headers['access-token'] = sessionStorage.getItem('token')
//     return config
//   }, function (error) {
//     return Promise.reject(error)
//   })

// /**
//  * 响应拦截器
//  * @param { object } response 响应参数
//  */
// service.interceptors.response.use(
//   (response) => {
//     if (response.status === statusCode.responseSuccess) {
//       return response.data;
//     } else {
//       return response.data;
//     }
//   },
//   (error) => {
//     if (error) {
//       if (error.response) {
//         let httpError = {
//           hasError: true,
//           status: error.response.status,
//           statusText: error.response.statusText,
//         };
//         errorHandle(httpError.status, httpError.statusText);
//       } else {
//         // show toast
//       }
//       return Promise.reject(error);
//     } else {
//       // show toast
//     }
//   }
// );

export default service;
