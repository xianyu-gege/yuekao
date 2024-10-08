import request from "./request";

// 按需导出
// eslint-disable-next-line import/prefer-default-export
export const LoginPost = (data) => request.post("", data);
