import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://northcoders-backend-project.onrender.com/api/",
});

export const getTopics = () => {
  return apiClient
    .get("/topics")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticlesPerTopic = (
  topic_slug,
  sortBy = "created_at",
  order = "desc"
) => {
  return apiClient
    .get(`/articles?topic=${topic_slug}&sort_by=${sortBy}&order=${order}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
