/*
* Author: fengkun
* Create Time: 2020-03-2020/3/13 00:44:16
* */
import axios from 'axios'
import API from './api'
import baseUrl from './baseUrl'

axios.defaults.baseURL = baseUrl

/*// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});*/

/*
* 输出请求接口
* */
/*
export const Login = (params) => {
  return axios.post(API.login, params)
}*/
