import axios from "axios";

// 创建实例
const instance = axios.create({
  baseURL: "http://www.pudge.wang:3080/api",
  // 超时时间
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
  params: {
    //   // ID: 12345,
    token: localStorage.getItem("token"),
  },
  data: {
    token: localStorage.getItem("token"),
  },
});

// 拦截器
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    // if (config.url === "/file/upload") {
    //   config.headers = .....
    // }

    // if (config.method === "get") {
    //   config.params.token = localStorage.getItem("token");
    // } else {
    //   config.data.token = localStorage.getItem("token");
    // }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log("response", response);
    // 处理状态码
    if (response.status === 200) {
      return response.data;
    } else if (response.status === 500) {
      throw new Error("服务器错误");
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

const http = {
  get(url, params) {
    return instance
      .get(url, {
        params: params,
      })
      .then((res) => {
        console.log("res", res);
        return res;
      })
      .catch((err) => {
        if (err.message === "timeout of 1000ms exceeded") {
          alert("请求超时");
        }
        alert(err);
      });
  },
  post(url, data) {
    return instance.post(url, data).then((res) => {
      return res.data;
    });
  },
};

export default http;
