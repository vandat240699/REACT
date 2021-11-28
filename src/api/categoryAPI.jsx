import instance from "./instance";

export const listCategory = () => {
  const url = "/categorys";
  return instance.get(url);
};
