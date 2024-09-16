import { useEffect, useState } from "react";
import { getArticles } from "../../../API/Articles";
import ArticleCard from "./ArticleCard";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);

  console.log(articles);
  useEffect(() => {
    getArticles().then(({ data: { articles } }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div>
      {articles.map((article, index) => {
        return <ArticleCard key={index} article={article} />;
      })}
    </div>
  );
};

export default ArticlePage;
