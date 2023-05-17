import { postDatas } from "../data/data";

export const getPostData = (id: string) => {
  const postData = postDatas.find((item) => item.id === id);
  return postData;
};
