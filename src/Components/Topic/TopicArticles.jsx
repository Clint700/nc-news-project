import { useEffect, useState } from "react";
import { getArticlesPerTopic } from "../../../API/TopicsApi";
import { useParams } from "react-router-dom";
import ArticleCard from "../Article/ArticleCard";
import Query from "../Query";

const TopicArticles = () => {
  const { topic_slug } = useParams();
  const [articles, setTopicArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const queryArticles = (sortBy, order) => {
    getArticlesPerTopic(topic_slug, sortBy, order)
      .then(({ data: { articles } }) => {
        setTopicArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load articles...");
        setLoading(false);
      });
  };

  useEffect(() => {
    queryArticles("created_at, desc");
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
      <Query onQueryChange={queryArticles} />
      <ul className="space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default TopicArticles;
