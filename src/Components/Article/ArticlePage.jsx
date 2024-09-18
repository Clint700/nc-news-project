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
      {articles.map((article) => {
        return (
          <>
            <ArticleCard key={article.article_id} article={article} />
          </>
        );
      })}
    </div>
  );
};

export default ArticlePage;
