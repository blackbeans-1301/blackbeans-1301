import { works } from "../data/data";

export const getPostData = (id: string) => {
  const postData = works.find((item) => item.id === id);
  return postData;
};
