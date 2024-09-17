import { useEffect, useState } from "react";
import { getArticles } from "../../../API/ArticlesApi";
import ArticleCard from "./ArticleCard";

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(({ data: { articles } }) => {
      setArticles(articles);
    });
  }, []);

  return (
    <div>
      {articles.map((article, index) => {
        return (
          <>
            <ArticleCard key={index} article={article} />
          </>
        );
      })}
    </div>
  );
};

export default ArticlePage;
