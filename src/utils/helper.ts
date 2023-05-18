import { webDevelopment, mobileDevelopment, otherProjects } from "../data/data";

export const getPostData = (id: string) => {
  let allData = webDevelopment.concat(mobileDevelopment, otherProjects);
  const postData = allData.find((item) => item.id === id);
  return postData;
};
