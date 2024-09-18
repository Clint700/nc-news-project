import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://northcoders-backend-project.onrender.com/api/",
  timeout: 10000,
});

export const getArticleComments = (article_id) => {
  return apiClient
    .get(`/articles/${article_id}/comments`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postComment = (article_id, commentData) => {
  return apiClient
    .post(`/articles/${article_id}/comments`, commentData)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
};
