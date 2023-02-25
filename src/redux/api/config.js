import axios from "axios";
import { store } from "../../App";

const baseURL = "http://localhost:4000/";
// console.log(store.getState().user);

const getUser = () => {
  const user = store.getState().user;
  const admin = store.getState().user;
  const token = admin?.authenticated
    ? admin?.userData?.token
    : user?.authenticated
    ? user?.userData?.token
    : "";
  console.log(admin, "yes", user, "yes");
  console.log(token);
  return token || "";
};

const config = {
  headers: {
    Accept: "application/json",
    ContentType: "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: "Bearer ",
  },
};

let $axios = axios.create({
  ...config,
  baseURL,
});

$axios.interceptors.request.use((request) => {
  request.headers["Authorization"] = "Bearer " + getUser();
  console.log(request);
  return request;
});

$axios.interceptors.response.use(
  async (response) => response,
  async (error) => {
    console.log(error);
    if (
      error?.response?.status === 401 ||
      error?.response?.data?.message === "Unauthenticated."
    ) {
      localStorage.removeItem("ecommerce_user");
      localStorage.removeItem("ecommerce_admin");
      if (error.config?.url.includes("admin")) {
        window.location.href = "/admin/login";
      } else {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error.response);
  }
);
export default $axios;
