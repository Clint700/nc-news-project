import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://northcoders-backend-project.onrender.com/api/",
});

export const getQuery = (sortBy = 'created_at', order = "desc") => {
  return apiClient
    .get(`/articles/sort_by=${sortBy}&order=${order}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
