import type {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import axios from "axios";
class Srequest {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log("请求拦截");

        return config;
      }
    );
    this.instance.interceptors.response.use((config: AxiosResponse) => {
      console.log("请求拦截");

      return config;
    });
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T>(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get(url: string, params?: any) {
    return this.request({ url, params, method: "GET" });
  }
  post(url: string, data?: any) {
    return this.request({ url, data, method: "POST" });
  }
}
const Srequests = new Srequest({
  baseURL: "http://localhost:3000/pc",
  timeout: 10000,
});
export default Srequests;
