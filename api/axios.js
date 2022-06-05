import axios from "axios";
import config from "../config"

// 判断当前运行环境
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

// 新建axios工具类
class HttpRequest {
    // 配置初始化
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    // 定义axios相关配置
    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return config
    }

    //拦截器相关函数
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            // console.log(response,'response');
            return response;
        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            // console.log(error,'error');

            return Promise.reject(error);
        });
    }
    // 发送接口请求的时候调用
    request(options) {
        const instance = axios.create()
        options = {
            ...this.getInsideConfig(),
            ...options
        }
        this.interceptors(instance)
        return instance(options)
    }
}
export default new HttpRequest(baseUrl)