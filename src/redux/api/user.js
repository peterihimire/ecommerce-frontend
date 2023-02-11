import $axios from "./config";
import axios from "axios";
import { store } from "../../App";

const userAPI = {
  async loginUser(payload) {
    return $axios.post("/api/applicants/login", payload);
  },
  async logoutUser(payload) {
    return $axios.get("/api/applicants/logout", payload);
  },
};
export default userAPI;
