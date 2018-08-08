import axios from 'axios';

let ajax = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 100000
});

// 拦截请求
ajax.interceptors.request.use((config) => {
  return config;
}, error => {
  return Promise.reject(error);
});

// 拦截响应
ajax.interceptors.response.use((response) => {
  return response;
}, error => {
  return error.response;
});
export default ajax;
