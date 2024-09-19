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

export const getArticlesPerTopic = (topic_slug) => {
  return apiClient
    .get(`/articles?topic=${topic_slug}`)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};
