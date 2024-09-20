import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://northcoders-backend-project.onrender.com/api/",
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

export const deleteComment = (comment_id) => {
  return apiClient
    .delete(`/comments/${comment_id}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

//Issue resolved