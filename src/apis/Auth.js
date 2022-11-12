import request from "@/utils/request";

const commonUrl = "common";

const forum = (params) => {
  return request.get(`${commonUrl}/forum`, {params: params});
}

const bulletin = (params) => {
  return request.get(`${commonUrl}/bulletin`, { params: params });
};

const search = (params) => {
  return request.get(`${commonUrl}/search`, {params: params});
}

const attachment = (params) => {
  return request.post(`${commonUrl}/attachment`, params)
}

export default {
  forum,
  bulletin,
  search,
  attachment
};
