import instance from "./instance";

export const createCate = (categorys) => {
  const url = "/categorys";
  return instance.post(url, categorys);
};
export const listCategory = () => {
  const url = "/categorys";
  return instance.get(url);
};
export const readcate = (id) => {
  const url = "/categorys/" + id;
  return instance.get(url);
};
export const removecate = (id) => {
  const url = "/categorys/" + id;
  return instance.delete(url);
};
export const updatecate = (categorys) => {
  const url = "/categorys/" + categorys.id;
  return instance.put(url, categorys);
};
