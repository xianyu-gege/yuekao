import request from "./request";

// 按需导出
// eslint-disable-next-line import/prefer-default-export
export const getAccessToken = (data) => request.post("/oauth/token", data);
