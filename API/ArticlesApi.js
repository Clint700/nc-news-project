import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://northcoders-backend-project.onrender.com/api/",
});

export const getArticles = () => {
  return apiClient
    .get("/articles")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleByID = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
