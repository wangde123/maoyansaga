import http from "./http";

export const ratedApi = (params) => http.get("/rated/list", params);
