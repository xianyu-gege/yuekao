import axios from "axios";

export default axios.create({
  baseURL: "https://gitee.com",
  timeout: 5000,
});
