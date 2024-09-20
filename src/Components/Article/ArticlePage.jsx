import { useEffect, useState } from "react";
import { getArticles } from "../../../API/ArticlesApi";
import ArticleCard from "./ArticleCard";
import Query from "../Query";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticles = (sortBy, order) => {
    setLoading(true);
    getArticles(sortBy, order)
      .then(({ data: { articles } }) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("failed to load articles");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchArticles("created_at", "desc");
  }, []);

  if (loading) {
    return <p>Articles Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <Query onQueryChange={fetchArticles} />
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
