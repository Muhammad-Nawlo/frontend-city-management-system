import ax from "axios";
import i18n from "i18next";

import { API_BASE_URL } from "@/constants/domain";

let token = localStorage.getItem("token");

const axios = ax.create({
  baseURL: API_BASE_URL,
});

axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accept-Language"] = i18n.language;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
export function refreshAxiosToken() {
  token = localStorage.getItem("token");
}
axios.interceptors.response.use((response) => response);
export default axios;
