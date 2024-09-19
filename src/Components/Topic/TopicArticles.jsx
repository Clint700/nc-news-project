import { useEffect, useState } from "react";
import { getArticlesPerTopic } from "../../../API/TopicsApi";
import { useParams } from "react-router-dom";
import ArticleCard from "../Article/ArticleCard";

const TopicArticles = () => {
  const { topic_slug } = useParams();
  const [articles, setTopicArticles] = useState([]);
  const [loading, setLoding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticlesPerTopic(topic_slug)
      .then(({ data: { articles } }) => {
        setTopicArticles(articles);
        setLoding(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load articles...");
        setLoding(false);
      });
  }, [topic_slug]);

  if (loading) {
    return <p>Articles loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Articles about {topic_slug}</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default TopicArticles;
