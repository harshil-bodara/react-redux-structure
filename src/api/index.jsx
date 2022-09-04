import Axios from "axios";

const getBearerToken = () => {
  const token = localStorage.getItem("access_token");
  return token ? `Bearer ${token}` : '';
}

var httpClient = Axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "application/json",
  },
  timeout: 100000,
});

httpClient.interceptors.request.use(function (config) {
  config.headers.Authorization =  getBearerToken();
  return config;
});

export default httpClient;