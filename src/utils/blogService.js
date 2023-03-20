import axios from "axios";
const url = "http://3.7.81.243:3253/api/blog/";

export const getAllBlogs = () => {
  return axios.get(url);
};
